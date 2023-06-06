import React from 'react';
import {
  useSandpack,
  useActiveCode,
} from '@codesandbox/sandpack-react';

import useScrollDisabler from './hooks/useScrollDisabler';
import useInterval from './hooks/useInterval';

// It is way too easy to accidentally use the same ID multiple
// times in a given lesson. When this happens, editing one
// playground can break the other with the same ID.
export function useDuplicateIdWarning(id) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    if (!id) {
      console.warn('Playground missing ID');
      return;
    }

    const allMatches = document.querySelectorAll(`[data-id=${id}]`);

    if (allMatches.length > 1) {
      console.error('MULTIPLE PLAYGROUNDS USE SAME ID:', id);
    }
  }, [id]);
}

export function usePrettier({ showLineNumbers, editorWrapperRef }) {
  const { sandpack } = useSandpack();
  const activeCode = useActiveCode();
  const { activeFile } = sandpack;

  const prettierRef = React.useRef(null);
  const babelParserRef = React.useRef(null);
  const cssParserRef = React.useRef(null);
  const htmlParserRef = React.useRef(null);

  // `activeCode` changes whenever the code changes, obviously.
  // But this means our `handleFormat` function is regenerated on
  // every keystroke, which means a bunch of formatting things
  // are unbound and rebound. Lots of work.
  // Store activeCode in a ref to avoid this unnecessary work.
  const activeCodeRef = React.useRef(activeCode);
  React.useEffect(() => {
    activeCodeRef.current = activeCode;
  }, [activeCode]);

  React.useEffect(() => {
    Promise.all([
      import('prettier/standalone'),
      import('prettier/parser-html'),
      import('prettier/parser-postcss'),
      import('prettier/parser-babel'),
    ])
      .then(([prettier, html, css, babel]) => {
        prettierRef.current = prettier;
        htmlParserRef.current = html;
        cssParserRef.current = css;
        babelParserRef.current = babel;
      })
      .catch((err) => {
        console.error(
          'Could not load Prettier and its parsers:',
          err
        );
      });
  }, []);

  const handleFormat = React.useCallback(
    (cursorOffset) => {

      const hasLoaded =
        !!prettierRef.current &&
        !!htmlParserRef.current &&
        !!cssParserRef.current &&
        !!babelParserRef.current;
      
      if (!hasLoaded) {
        // TODO: Toast error?
        return;
      }

      const printWidth = getPrintWidth({
        showLineNumbers,
        editorWrapperRef,
      });

      const prettierOptions = {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth,
      };

      const language = getLanguageFromFilePath(activeFile);

      let result;
      try {
        if (language === 'javascript') {
          result = prettierRef.current.formatWithCursor(
            activeCodeRef.current.code,
            {
              parser: 'babel',
              plugins: [babelParserRef.current],
              cursorOffset,
              ...prettierOptions,
            }
          );
        } else if (language === 'css') {
          result = prettierRef.current.formatWithCursor(
            activeCodeRef.current.code,
            {
              parser: 'css',
              plugins: [cssParserRef.current],
              cursorOffset,
              ...prettierOptions,
            }
          );
        } else if (language === 'html') {
          result = prettierRef.current.formatWithCursor(
            activeCodeRef.current.code,
            {
              parser: 'html',
              plugins: [htmlParserRef.current],
              cursorOffset,
              ...prettierOptions,
            }
          );
        } else {
          // Unknown language
          return;
        }
      } catch (err) {
        // If we can't format the code, it should log an error
        // to the console, but not cause any further issue.
        console.error('Could not format code. Error:');
        console.error(err);
        return;
      }

      let { formatted, cursorOffset: newCursorOffset } = result;

      // Remove trailing whitespace
      formatted = formatted.trim();

      activeCodeRef.current.updateCode(formatted);

      return newCursorOffset;
    },
    [editorWrapperRef, showLineNumbers, activeFile]
  );

  return handleFormat;
}

/**
 * Prettier takes a “printWidth” argument. Ideally, this value should
 * vary based on the size of the code editor! A large editor should
 * fit more chars per line than a narrow one.
 */
function getPrintWidth({ showLineNumbers, editorWrapperRef }) {
  const DEFAULT_PRINT_WIDTH = 40;

  if (!editorWrapperRef.current) {
    return DEFAULT_PRINT_WIDTH;
  }

  try {
    const editorNode = editorWrapperRef.current;

    const { width } = editorNode.getBoundingClientRect();

    // Each character is about 8.5px wide.
    // I want to err on the side of too narrow vs too wide though.
    // So I'll round up.
    const charWidth = 9;

    const lineNumWidth = 30;

    // The “width” is the entire width of the container. There is
    // some padding on this container, and there's even less available
    // space if line numbers are shown.
    const reduceWidthBy = showLineNumbers ? 40 + lineNumWidth : 40;

    let printWidth = Math.round((width - reduceWidthBy) / charWidth);

    // Never go above 80
    printWidth = Math.min(printWidth, 80);

    return printWidth;
  } catch (err) {
    return DEFAULT_PRINT_WIDTH;
  }
}

/**
 * We need to access the CodeMirror instance when formatting the
 * code, so that Prettier knows the current cursor position.
 *
 * Unfortunately, there's no easy way to get this, so we'll do
 * a janky thing where we keep trying to grab it, through a ref.
 */
export function useCodeMirror(editorKey) {
  const { sandpack } = useSandpack();

  // This ref will attach to the CodeEditor from Sandpack.
  const codeMirrorGrabberRef = React.useRef(null);

  const [codeMirrorInstance, setCodeMirrorInstance] = React.useState(
    null
  );

  // When the page first loads, we need to grab the CodeMirror
  // instance from SandpackCodeEditor. But, because this happens
  // arbitrarily after load, we don't know exactly when it'll be
  // available. So, we'll keep trying, every 200ms, until it
  // loads.
  const shouldRunInterval = !codeMirrorInstance;
  const intervalLength = shouldRunInterval ? 200 : null;

  useInterval(() => {
    try {
      const instance = codeMirrorGrabberRef.current.getCodemirror();

      if (instance) {
        setCodeMirrorInstance(instance);
      }
    } catch (err) {}
  }, intervalLength);

  // When the user changes which file is active, it destroys and
  // re-creates a CodeMirror instance. And, again, we don't know
  // exactly how long that'll take. So, we'll immediately unset
  // the instance (since it's destroyed anyway). This will restart
  // the interval, since it runs whenever `codeMirrorInstance` is
  // falsy.
  //
  // Similarly, whenever the editor is re-created via the `key`
  // prop, we also need to reset the instance so we can recapture
  // it from the new DOM.
  // A weird bug means that calling `sandpack.updateFile` or
  // `sandpack.resetAllFiles` will occasionally NOT update the
  // editor, even as it updates the result pane. By deleting and
  // reconstructing it, we prevent this bug.
  React.useEffect(() => {
    setCodeMirrorInstance(undefined);
  }, [sandpack.activeFile, editorKey]);

  return {
    codeMirrorGrabberRef,
    codeMirrorInstance,
  };
}

function getLanguageFromFilePath(filePath) {
  if (filePath.match(/\.jsx|ts|tsx*/i)) {
    return 'javascript';
  } else if (filePath.match(/\.css/i)) {
    return 'css';
  } else if (filePath.match(/\.html*/i)) {
    return 'html';
  } else {
    return 'unknown';
  }
}

export function useFullscreen(startFullscreened) {
  const [isFullscreened, setIsFullscreened] = React.useState(
    startFullscreened
  );

  useScrollDisabler(isFullscreened);

  React.useEffect(() => {
    if (!isFullscreened) {
      return;
    }

    function handleKeydown(ev) {
      if (ev.key === 'Escape') {
        setIsFullscreened(false);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    window.requestAnimationFrame(() => {
      // HACK — Probably shouldn't use an ID here.
      // Though it's safe since only 1 frame can be fullscreened
      // at once.
      const fullscreenElem = document.querySelector(`#fs-wrapper`);

      // @ts-ignore
      fullscreenElem?.focus();
    });

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isFullscreened]);

  // When fullscreening the code editor, we want to hide/show
  // the mobile/tablet menu button

  return [isFullscreened, () => setIsFullscreened((f) => !f)];
}
