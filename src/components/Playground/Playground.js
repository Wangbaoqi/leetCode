// Forked from https://github.com/agneym/playground
import React from 'react';
import styled, {
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';

import {
  usePaneData,
  usePrettier,
  useDuplicateIdWarning,
  useFullscreen,
} from './hooks';

import CodeWrapper from './CodeWrapper';
import Toolbar from './Toolbar';
import RefreshButton from './Toolbar/RefreshButton';
import SplitPane from './SplitPane';
import Pane from './Pane';
import Editor from './Editor';
import TabbedEditors from './TabbedEditors';
import Result from './Result';
import { BREAKPOINT } from './Playground.constants';

function Playground({
  id,
  title,
  html,
  css,
  js,
  mode = 'default', // 'default' | 'react'
  layoutMode, // codepen, side-by-side, vertical-stack
  centered,
  boxSizing = 'border-box',
  splitRatio = '0.5',
  resultStyle = {},
  stacked,
  startFullscreened,
  ...rest
}) {
  // So, `css` as a prop is taken over by styled-components.
  // In the course platform, this doesn't matter, but it
  // seems to cause problems here.
  if (rest.cssCode) {
    css = rest.cssCode;
  }

  const [htmlCode, setHtmlCode] = React.useState(html?.trim());
  const [cssCode, setCssCode] = React.useState(css?.trim());
  const [jsCode, setJsCode] = React.useState(js?.trim());

  // A "refresh" button allows the user to refresh the results pane.
  // To implement this, we'll set this state to a random value,
  // and use it as the `key` prop for the <Result> component.
  // That way, it forces a remount when it changes.
  const [randomId, setRandomId] = React.useState('initial');

  const [isFullscreened, toggleFullscreen] = useFullscreen(
    startFullscreened
  );

  const handleFormat = usePrettier({
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
  });

  useDuplicateIdWarning(id);

  // TODO: Do I need to have the ability to display in a custom
  // order?

  /**
   * Create an array of objects
   * {
   *   language: string
   *   label: string
   *   code: string
   *   handleUpdate: (code: string) => void
   * }
   */
  const paneData = usePaneData({
    mode,
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
  });

  function handleReset() {
    setHtmlCode(html?.trim());
    setCssCode(css?.trim());
    setJsCode(js?.trim());
  }

  const codeMap = React.useMemo(
    () => ({
      markup: htmlCode,
      css: cssCode,
      javascript: jsCode,
    }),
    [htmlCode, cssCode, jsCode]
  );

  // There are three supported layout modes:
  // side-by-side (1 snippet, 1 result, side by side)
  // codepen (2 snippets side-by-side, 1 result underneath)
  // vertical-stack (2 snippets stacked vertically beside the result)
  // prettier-ignore
  layoutMode = layoutMode || (
    paneData.length === 1
      ? 'side-by-side'
      : 'codepen'
  );

  // Should we stretch the Results pane to fill the available
  // vertical height?
  // We want to do this when it's alone in the column, so it reaches
  // the base of the editor. But in "codepen mode", doing so causes
  // its height to become locked rather than being resizable.
  const stretchResults = isFullscreened || layoutMode !== 'codepen';

  const resultPane = (
    <Pane
      title="Result"
      style={{ height: stretchResults ? '100%' : undefined }}
      actions={
        <RefreshButton
          handleRefresh={() => {
            setRandomId(Math.random().toString());
          }}
        />
      }
    >
      <Result
        key={randomId}
        id={id}
        codeMap={codeMap}
        mode={mode}
        centered={centered}
        stretched={stretchResults}
        layoutMode={layoutMode}
        isFullscreened={isFullscreened}
        boxSizing={boxSizing}
        style={resultStyle}
      />
    </Pane>
  );

  let contents;

  if (paneData.length === 0) {
    throw new Error(
      "Couldn't create any panes for the Playground. Be sure to pass at least one of 'html', 'cssCode', or 'js'."
    );
  }

  switch (layoutMode) {
    case 'codepen': {
      const [firstPane, secondPane] = paneData;

      contents = (
        <>
          <SplitPane
            // TODO: SplitPane props object
            splitRatio={Number(splitRatio)}
            isFullscreened={isFullscreened}
            leftChild={
              <Pane title={firstPane.label}>
                <Editor
                  code={firstPane.code}
                  language={firstPane.language}
                  handleUpdate={firstPane.handleUpdate}
                  handleFormat={handleFormat}
                  maxHeight={isFullscreened ? undefined : '50vh'}
                />
              </Pane>
            }
            rightChild={
              <Pane title={secondPane.label} translate="no">
                <Editor
                  code={secondPane.code}
                  language={secondPane.language}
                  handleUpdate={secondPane.handleUpdate}
                  handleFormat={handleFormat}
                  maxHeight={isFullscreened ? undefined : '50vh'}
                />
              </Pane>
            }
          />
          <BottomPaneWrapper>{resultPane}</BottomPaneWrapper>
        </>
      );
      break;
    }

    case 'side-by-side': {
      const [data] = paneData;
      const { label, ...editorData } = data;

      contents = (
        <SplitPane
          splitRatio={Number(splitRatio)}
          isFullscreened={isFullscreened}
          leftChild={
            <Pane title={label} style={{ minHeight: '100%' }}>
              <Editor
                {...editorData}
                handleFormat={handleFormat}
                maxHeight={!isFullscreened ? '50vh' : '100%'}
              />
            </Pane>
          }
          rightChild={resultPane}
        />
      );

      break;
    }

    case 'tabbed': {
      contents = (
        <SplitPane
          splitRatio={Number(splitRatio)}
          isFullscreened={isFullscreened}
          leftChild={
            <TabbedEditors
              paneData={paneData}
              splitRatio={Number(splitRatio)}
              maxHeight={!isFullscreened ? '50vh' : '100%'}
              handleFormat={handleFormat}
            />
          }
          rightChild={resultPane}
        />
      );
      break;
    }

    case 'vertical-stack': {
      // Flip the order.
      // This'll likely be HTML and CSS, and I want the
      // CSS on top.
      const [secondPane, firstPane] = paneData;

      contents = (
        <SplitPane
          splitRatio={Number(splitRatio)}
          isFullscreened={isFullscreened}
          leftChild={
            <VerticalPaneCodeWrapper
              style={{
                maxHeight: isFullscreened ? '100vh' : '80vh',
              }}
            >
              <Pane
                title={firstPane.label}
                style={{ flex: 1, minHeight: 0 }}
              >
                <Editor
                  code={firstPane.code}
                  language={firstPane.language}
                  handleUpdate={firstPane.handleUpdate}
                  handleFormat={handleFormat}
                />
              </Pane>
              <Line />
              <Pane
                title={secondPane.label}
                style={{
                  flex: 1,
                  minHeight: 0,
                }}
              >
                <Editor
                  code={secondPane.code}
                  language={secondPane.language}
                  handleUpdate={secondPane.handleUpdate}
                  handleFormat={handleFormat}
                  // maxHeight={
                  //   isFullscreened
                  //     ? `calc(50vh - ${paneMinusEditor}px`
                  //     : '38vh'
                  // }
                />
              </Pane>
            </VerticalPaneCodeWrapper>
          }
          rightChild={resultPane}
        />
      );
      break;
    }

    default: {
      throw new Error('Unrecognized layout mode: ' + layoutMode);
    }
  }

  return (
    <CodeWrapper
      data-id={id}
      className="full-bleed"
      stacked={!!stacked}
      isFullscreened={isFullscreened}
    >
      <Toolbar
        title={title}
        isFullscreened={isFullscreened}
        handleToggleFullscreen={toggleFullscreen}
        handleReset={handleReset}
        handleFormat={handleFormat}
      />
      {contents}
    </CodeWrapper>
  );
}

const BottomPaneWrapper = styled.div`
  border-top: 1px solid var(--color-gray-100);
  height: 100%;
  flex: 1;
`;

const Line = styled.div`
  border-top: 1px solid var(--color-gray-100);
  /* margin: 6px 0; */
`;

const VerticalPaneCodeWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${BREAKPOINT}px) {
    flex-direction: column;
    height: 100%;
  }
`;

export default Playground;
