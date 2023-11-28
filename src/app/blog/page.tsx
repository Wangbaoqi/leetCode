import { PostWrapper } from '@/components/blogLayout';
import React, { Suspense } from 'react';

export default function Home() {
  return (
    <div className='max-w-5.5xl mx-auto px-4'>
      <div className='h-24'></div>
      <PostWrapper />
    </div>
  );
}
