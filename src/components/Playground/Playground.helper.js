import React from 'react';

import useScrollDisabler from '@hooks/use-scroll-disabler.hook';

// It is way too easy to accidentally use the same ID multiple
// times in a given lesson. When this happens, editing one
// playground can break the other with the same ID.
export function useDuplicateIdWarning(id) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const allMatches = document.querySelectorAll(`[data-id=${id}]`);

    if (allMatches.length > 1) {
      console.error('MULTIPLE PLAYGROUNDS USE SAME ID:', id);
    }
  }, []);
}

export function usePrettier({
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}) {
  const [prettier, setPrettier] = React.useState(null);
  const [babelParser, setBabelParser] = React.useState(null);
  const [cssParser, setCssParser] = React.useState(null);
  const [htmlParser, setHtmlParser] = React.useState(null);

  React.useEffect(() => {
    Promise.all([
      import('prettier/standalone'),
      import('prettier/parser-html'),
      import('prettier/parser-postcss'),
      import('prettier/parser-babel'),
    ])
      .then(([prettier, html, css, babel]) => {
        setPrettier(prettier);
        setHtmlParser(html);
        setCssParser(css);
        setBabelParser(babel);
      })
      .catch((err) => {
        console.error(
          'Could not load Prettier and its parsers:',
          err
        );
      });
  }, []);

  const hasLoaded =
    !!prettier && !!htmlParser && !!cssParser && !!babelParser;

  const handleFormat = React.useCallback(() => {
    if (!hasLoaded) {
      return;
    }

    const prettierOptions = {
      // TODO: Be smart about this, somehow?
      printWidth: 40,
    };

    if (jsCode) {
      setJsCode(
        prettier.format(jsCode, {
          parser: 'babel',
          plugins: [babelParser],
          ...prettierOptions,
        })
      );
    }

    if (cssCode) {
      setCssCode(
        prettier.format(cssCode, {
          parser: 'css',
          plugins: [cssParser],
          ...prettierOptions,
        })
      );
    }

    if (htmlCode) {
      setHtmlCode(
        prettier.format(htmlCode, {
          parser: 'html',
          plugins: [htmlParser],
          ...prettierOptions,
        })
      );
    }
  }, [hasLoaded, jsCode, cssCode, htmlCode]);

  return handleFormat;
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

  return [isFullscreened, () => setIsFullscreened((f) => !f)];
}

export function usePaneData({
  mode,
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}) {
  const panes = React.useMemo(() => {
    const paneData = [
      {
        language: 'markup',
        label: 'HTML',
        code: htmlCode,
        handleUpdate: setHtmlCode,
      },
      {
        language: 'css',
        label: 'CSS',
        code: cssCode,
        handleUpdate: setCssCode,
      },
    ];

    if (mode === 'react') {
      paneData.unshift({
        language: 'jsx',
        label: 'JSX',
        code: jsCode,
        handleUpdate: setJsCode,
      });
    } else {
      paneData.push({
        language: 'javascript',
        label: 'JS',
        code: jsCode,
        handleUpdate: setJsCode,
      });
    }

    return paneData.filter(({ code }) => typeof code === 'string');
  }, [mode, htmlCode, cssCode, jsCode]);

  if (panes.length === 0 || panes.length === 3) {
    console.error(
      'Passed too many code snippets! I only understand 1 or 2 code snippets at once'
    );
  }

  return panes;
}
