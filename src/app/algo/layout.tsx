import React from 'react';

interface BlogLayoutProp {
  children: React.ReactNode;
}
export default function AlgoLayout({ children }: BlogLayoutProp) {
  return <div className='relative flex flex-col'>{children}</div>;
}
