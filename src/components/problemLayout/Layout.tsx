'use client';
import React, { useRef } from 'react';

import { CodeEditor } from '@/components/monaco';
import { Description } from './Description';
import RightWrapper from './RightWrapper';
import LeftWrapper from './LeftWrapper';
import { iteratee } from 'lodash';
import { type Algo } from 'contentlayer/generated';

interface Props {
  post: Algo | undefined;
}
export function Layout({ post }: Props) {
  const leftRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className='flex flex-col px-2 pt-2 lg:flex-row'
      style={{ height: 'calc(100vh - 3rem)' }}
    >
      <div
        ref={leftRef}
        className={`w-full lg:max-w-[700px] overflow-hidden rounded-2xl border border-default-200/70 dark:border-default-100/80 bg-zinc-100 dark:bg-zinc-900`}
      >
        <LeftWrapper post={post} />
      </div>
      <div
        ref={resizerRef}
        className={`resize group relative cursor-col-resize p-2`}
      >
        <div className='group-hover:bg-default-400 group-active:bg-default-700 absolute left-1/2 top-1/2 h-1 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-default-200 duration-300 lg:h-24 lg:w-1'></div>
      </div>
      <div
        ref={rightRef}
        className='flex min-h-[90px] w-full flex-1 flex-grow flex-col overflow-hidden rounded-2xl border border-default-200/70 dark:border-default-100/80 bg-zinc-100 dark:bg-zinc-900 lg:min-w-[500px]'
      >
        <RightWrapper />
      </div>
    </div>
  );
}
