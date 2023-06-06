

import React from 'react';

import { usePrettier, useCodeMirror } from './helpers';
import { useLogs } from './Console/helpers';

const CodeEditorContext = React.createContext(null);

export function CodeEditorProvider({
  id,
  showLineNumbers,
  editorKey,
  children,
}) {
  const [logs, clearLogs] = useLogs();
  const editorWrapperRef = React.useRef(null);

  const handleFormat = usePrettier({
    id,
    showLineNumbers,
    editorWrapperRef,
  });

  const { codeMirrorGrabberRef, codeMirrorInstance } = useCodeMirror(
    editorKey
  );

  const formatCodeWithOffset = React.useCallback(
    function formatCodeWithOffset() {
      if (!codeMirrorInstance) {
        console.error(
          'CodeMirror not instantiated yet; cannot format'
        );
        return;
      }

      // If there's a code error, this whole thing throws
      // an error, which is a jarring experience!
      try {
        // For the best user experience, we want to move the cursor
        // along with the formatted code.
        // We pass the current offset to Prettier, and it returns
        // the new offset, based on its best guess about where the
        // cursor should go.
        const cursorOffset =
          codeMirrorInstance.state?.selection?.ranges?.[0]?.from;

        // The `handleFormat` method internally updates the code
        const newCursorOffset = handleFormat(cursorOffset);

        // We'll reset the cursor position here
        codeMirrorInstance?.dispatch({
          selection: { anchor: newCursorOffset },
        });
      } catch (err) {
        console.error('Error formatting code:', err);
      }
    },
    [handleFormat, codeMirrorInstance]
  );

  React.useEffect(() => {
    if (!codeMirrorInstance) {
      return;
    }

    const handleKeydown = (ev) => {
      if (ev.metaKey && ev.key === 's') {
        ev.preventDefault();
        ev.stopPropagation();
        formatCodeWithOffset();
      }
    };

    codeMirrorInstance.dom.addEventListener('keydown', handleKeydown);

    return () => {
      codeMirrorInstance.dom.removeEventListener(
        'keydown',
        handleKeydown
      );
    };
  }, [formatCodeWithOffset, codeMirrorInstance, editorKey]);

  const providedValue = React.useMemo(
    () => ({
      logs,
      clearLogs,
      editorWrapperRef,
      codeMirrorGrabberRef,
      codeMirrorInstance,
      formatCodeWithOffset,
    }),
    [
      logs,
      clearLogs,
      codeMirrorGrabberRef,
      codeMirrorInstance,
      formatCodeWithOffset,
    ]
  );

  return (
    <CodeEditorContext.Provider value={providedValue}>
      {children}
    </CodeEditorContext.Provider>
  );
}

export default CodeEditorContext;
