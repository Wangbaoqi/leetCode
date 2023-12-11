import React, { useRef } from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { CodeEditor } from './CodeEditor';

interface CodeSplitProps {
  className?: string;
}
export default function CodeSplit({ className }: CodeSplitProps) {
  const codeRef = useRef<HTMLDivElement>(null);
  const resizer = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={codeRef}
      className={clsx('flex h-[calc(100%-_90px)] flex-col', className)}
    >
      <section className='h-full overflow-hidden min-h-unit-6'>
        <CodeEditor />
      </section>

      <div className='transition-all'>
        <div
          ref={resizer}
          className='group cursor-row-resize border-y border-default-200/50 p-2 '
        >
          <div className='group-hover:bg-default-200 group-active:bg-default-500 m-auto h-1 w-24 rounded-full bg-default-300 duration-300' />
        </div>
        <div
          style={{
            height: '350px'
          }}
        >
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
