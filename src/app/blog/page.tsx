import { PostWrapper } from '@/components/blogLayout';
import React, { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <div className='h-24'></div>
      <PostWrapper />
    </div>
  );
}
