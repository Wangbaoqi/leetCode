import { NavBar, PostWrapper } from '@/components/blogLayout';
import React from 'react';

interface BlogLayoutProp {
  children: React.ReactNode;
}
export default function BlogLayout({ children }: BlogLayoutProp) {
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='container mx-auto max-w-[1100px] flex-grow'>
        {children}
      </div>
    </div>
  );
}
