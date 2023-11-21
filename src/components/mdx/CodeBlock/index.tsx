'use client';
import React, { Suspense } from 'react';
import CodeBlock from './CodeBlock';
import cn from 'clsx';

const CodeBlockWrapper = (props: { children: any }) => {
  const { children } = props;
  return (
    <Suspense
      fallback={
        <pre
          className={cn(
            'rounded-lg leading-6 h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg text-[13.6px] overflow-hidden'
          )}
        >
          <div className='py-[18px] pl-5 font-normal '>
            <p className='sp-pre-placeholder overflow-hidden'>{children}</p>
          </div>
        </pre>
      }
    >
      <CodeBlock {...props} />
    </Suspense>
  );
};

export default React.memo(CodeBlockWrapper);
