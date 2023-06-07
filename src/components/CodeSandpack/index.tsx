import React from 'react';
import { Sandpack, SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { useFullscreen } from './helpers';
import SandboxProvider from './SandboxProvider';
import CodeWrapper from './CodeWrapper';
import BlogUnit from './BlogUnit';
import BlogUnitSplitConsole from './BlogUnitSplitConsole'

export const CodeSandpack1 = () => {
  const files = {
    "/App.js": `export default function App() {
return <h1>Hello Sandpack</h1>
}`,
  }
  return <Sandpack files={files} />
}
4.
const CodeSandpack = ({
  id,
  title,
  mode = 'test',
  preset = 'testTs',
  files,
  activePath = '/',
  visibleFiles = [],
  maxHeight,
  minPreviewHeight = 360,
  splitRatio = 0.5,
  startFullScreened = false,
  showLineNumbers=true,
  fullBleed = true,
  resultTabs = ['Result', 'console'],
  initialTabIndex = 0,
  dependencies = {},
  splitConsole,
  showplayground,
  ...restProps
}) => { 
  const [activeResultTab, setActiveResultTab] = React.useState(
    resultTabs[initialTabIndex]
  );

  const [isFullScreened, toggleFullscreen] = useFullscreen(
    startFullScreened
  );

  const Unit = splitConsole ? BlogUnitSplitConsole : BlogUnit;

  return (
    <SandboxProvider
      id={id}
      preset={preset}
      files={files}
      activePath={activePath}
      visibleFiles={visibleFiles}
      fullBleed={fullBleed}
      dependencies={dependencies}
    >
      <CodeWrapper
        id={id}
        stacked={''}
        className={''}
        isFullscreened={isFullScreened}
      >
        <Unit
          id={id}
          title={title}
          preset={preset}
          isFullscreened={isFullScreened}
          toggleFullscreen={toggleFullscreen}
          showLineNumbers={showLineNumbers}
          resultTabs={resultTabs}
          activeResultTab={activeResultTab}
          handleSelectResultTab={setActiveResultTab}
          minPreviewHeight={minPreviewHeight}
          isLazy={true}
          showplayground={showplayground}
          {...restProps}
        />
      </CodeWrapper>

    </SandboxProvider>
  )
}


export default CodeSandpack