import { SideBar } from '@/components/algoLayout';
import React from 'react';

interface AlgoLayoutProp {
  children: React.ReactNode;
}
export default function AlgoLayout({ children }: AlgoLayoutProp) {
  return (
    <main className='flex items-stretch gap-2 h-screen p-2'>
      <section className='hidden overflow-y-auto w-[300px] lg:flex flex-col'>
        <SideBar />
      </section>
      <section className='bg-zinc-100 dark:bg-zinc-900 rounded-lg flex-1 mx-auto overflow-y-auto'>
        {children}
      </section>
    </main>
  );
}
