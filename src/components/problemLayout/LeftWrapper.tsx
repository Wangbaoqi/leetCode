'use client';
import React from 'react';
import { Description } from './Description';
import { type Algo } from 'contentlayer/generated';

interface Props {
  post: Algo | undefined;
}
export default function LeftWrapper({ post }: Props) {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className='items-center justify-start bg-transparent px-4 py-2 flex top-0 z-10 h-auto w-full border-b border-default-200/20 backdrop-blur-sm rounded-tl-xl'>
        题目描述
      </div>
      <Description post={post} />
    </div>
  );
}
