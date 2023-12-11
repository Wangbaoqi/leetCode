'use client';
import React from 'react';
import CodeSplit from './CodeSplit';

interface CodePanelProps {
  settingElement?: React.ReactNode;
}

export default function CodePanel(props: CodePanelProps) {
  return (
    <>
      <div className='sticky top-0 flex h-[40px] shrink-0 items-center justify-end gap-4 border-b border-default-200/70 dark:border-default-100/80 px-3 py-2 '>
        {props.settingElement}
      </div>
      <CodeSplit />
      <div className='sticky bottom-0 flex items-center justify-between border-t border-default-200/70 dark:border-default-100/80 p-2 '>
        <div className=''>Tests</div>
        <div className=''>Tests</div>
      </div>
    </>
  );
}
