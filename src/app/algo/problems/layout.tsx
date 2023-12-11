import { SideBar } from '@/components/algoLayout';
import React from 'react';

interface AlgoLayoutProp {
  children: React.ReactNode;
}
export default function AlgoLayout({ children }: AlgoLayoutProp) {
  return (
    <main className='flex items-stretch flex-col h-screen p-2'>
      <div className='h-12 bg-secondary-100'></div>
      <section className='flex-1 '>{children}</section>
    </main>
  );
}
