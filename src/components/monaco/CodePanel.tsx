'use client';
import React from 'react';
import CodeSplit from './CodeSplit';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';

interface CodePanelProps {
  settingElement?: React.ReactNode;
}

export default function CodePanel(props: CodePanelProps) {
  const { theme } = useTheme();
  const codeTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <>
      <div className='sticky top-0 flex h-[40px] shrink-0 items-center justify-end gap-4 border-b border-default-200/70 dark:border-default-100/80 px-3 py-2 '>
        {props.settingElement}
      </div>
      <SandpackProvider
        style={{
          height: 'calc(100% - 40px)',
          display: 'flex',
          flexDirection: 'column'
        }}
        template='test-ts'
        theme={codeTheme}
      >
        <CodeSplit />
      </SandpackProvider>
      {/* <div className='sticky bottom-0 flex items-center justify-between border-t border-default-200/70 dark:border-default-100/80 p-2 '>
        <div className=''>Tests</div>
        <div className=''>Tests</div>
      </div> */}
    </>
  );
}
