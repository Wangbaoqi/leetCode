import React from 'react';

export default function CodeSandpack() {
  return (
    <div>
      {/* <SandpackProvider
        style={{
          height: 'calc(100% - 40px)',
          display: 'flex',
          flexDirection: 'column'
        }}
        template='test-ts'
        files={files}
        theme={codeTheme}
        options={
          {
            // bundlerURL: 'https://sandpack-bundler-beta.vercel.app/'
            // bundlerTimeOut: 10000
            // bundlerURL: 'https://codedsandbox-bundler.wangbaoqi.tech'
          }
        }
      >
      </SandpackProvider> */}
      {/* <SandpackStack className='overflow-hidden h-full'>
        <div className='overflow-hidden h-full'></div>
      </SandpackStack> */}
      {/* <div className='transition-all' ref={testPanelBox}>
        <div
          ref={resizer}
          className='group cursor-row-resize border-y border-default-200/10 p-2 '
        >
          <div className='group-hover:bg-default-200 group-active:bg-default-500 m-auto h-1 w-24 rounded-full bg-default-300 duration-300' />
        </div>
        <div
          ref={testPanel}
          style={{
            height: `${panelHeight || MIN_HEIGHT}px`
          }}
        >
          <SandpackLayout>
            <SandpackStack>
              <CodeEditor
                initMode='lazy'
                code={testCode}
                filePath={testCodeFilePath}
                onCodeUpdate={(newCode) =>
                  updateFile(testCodeFilePath, newCode)
                }
              />
            </SandpackStack>
            <SandpackTests />
          </SandpackLayout>
        </div>
      </div> */}
    </div>
  );
}
