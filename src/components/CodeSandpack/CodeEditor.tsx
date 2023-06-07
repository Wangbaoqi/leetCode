import React from 'react';
import styled from 'styled-components';
import { SandpackCodeEditor, SandpackFileExplorer } from '@codesandbox/sandpack-react';
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { oneDarkTheme } from '@codemirror/theme-one-dark'
import useBrowser from './hooks/useBrowser';

import CodeEditorContext from './CodeEditorContext';
import { SPLIT_BREAKPOINT } from './constants';
import { InlineWrapper } from './CodeWrapper';

function CodeEditor({ showLineNumbers }) {
  const browser = useBrowser();
  const { codeMirrorGrabberRef, editorWrapperRef } = React.useContext(
    CodeEditorContext
  );
  const autoConfig = {
    // to
  }

  return (
    <Wrapper
      ref={editorWrapperRef}
      translate="no"
      style={{
        '--selection-background-color':
          browser === 'safari' ? '#909095' : 'var(--color-gray-200)',
      }}
    >
      {/* <SandpackFileExplorer /> */}
      <SandpackCodeEditor
        ref={codeMirrorGrabberRef}
        wrapContent
        showLineNumbers={showLineNumbers}
        extensions={[autocompletion(), ]}
        extensionsKeymap={[completionKeymap]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 8px;
  height: 100%;

  /*
    When we're on mobile, and not fullscreened, we need to set a
    fixed size.

    This element has “height: 100%”, but that only works if its
    parent has a “known height”. In Fullscreen mode, we're all good,
    because the group is given “height: 100vh” (it's fullscreen!)

    For some reason, we don't have the same issue on desktop.
  */
  ${InlineWrapper} & {
    @media (max-width: ${SPLIT_BREAKPOINT - 0.01}px) {
      height: 500px;
    }
  }
`;

export default CodeEditor;
