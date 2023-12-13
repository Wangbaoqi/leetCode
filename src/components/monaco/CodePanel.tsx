'use client';
import React from 'react';
import CodeSplit from './CodeSplit';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';
import { createFileMap } from './createFileMap';

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
  const codeTheme = theme === 'dark' ? 'dark' : 'light';
  const files = createFileMap(code);

  console.log(files, 'ddd');

  return (
    <>
      <div className='sticky top-0 flex h-[40px] shrink-0 items-center justify-end gap-4 border-b border-default-200/70 dark:border-default-100/80 px-3 py-2 '>
        {settingElement}
      </div>
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
