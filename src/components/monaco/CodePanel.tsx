'use client';
import React, { Suspense } from 'react';
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

export default function CodePanel({ settingElement, code }: CodePanelProps) {
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  const codeTheme = !isSSR && theme === 'dark' ? sandpackDark : 'light';
  const files = createFileMap(code);

  return (
    <>
      <SandpackProvider
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
            // visibleFiles: ['/code.test.ts']
          }
        }
      >
        <CodeSplit />
      </SandpackProvider>
    </>
  );
}
