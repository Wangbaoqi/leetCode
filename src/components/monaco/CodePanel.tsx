'use client';
import React, { Suspense, memo } from 'react';
import CodeSplit from './CodeSplit';
import { SandpackLayout, SandpackProvider } from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';
import { createFileMap } from './createFileMap';
import { sandpackDark, cobalt2, nightOwl } from '@codesandbox/sandpack-themes';
import { useIsSSR } from '@react-aria/ssr';

type CodeType = {
  code: string;
  testCode: string;
};

interface CodePanelProps {
  settingElement?: React.ReactNode;
  code: CodeType;
}

export default memo(function CodePanel({
  settingElement,
  code
}: CodePanelProps) {
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  const codeTheme = !isSSR && theme === 'dark' ? 'dark' : 'light';
  const files = createFileMap(code);

  return (
    <Suspense fallback={<>loading</>}>
      <SandpackProvider
        style={{
          height: 'calc(100% - 40px)',
          display: 'flex',
          flexDirection: 'column'
        }}
        template='test-ts'
        files={files}
        theme={codeTheme}
        customSetup={{
          devDependencies: {
            '@types/jest': 'latest',
            'ts-jest': 'latest',
            jest: 'latest'
          },
          dependencies: {}
        }}
        options={
          {
            // bundlerURL: 'https://sandpack-bundler-beta.vercel.app/'
            // bundlerTimeOut: 10000
            // bundlerURL: 'https://codedsandbox-bundler.wangbaoqi.tech'
          }
        }
      >
        <CodeSplit />
      </SandpackProvider>
    </Suspense>
  );
});
