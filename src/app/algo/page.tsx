import React from 'react';
import { AlgoCard, AlgoDataCard } from '@/components/algoLayout';

export default function AlgoPage() {
  return (
    <>
      <section className='relative transition-all duration-1000 min-h-[300px] bg-algo-home-200 dark:bg-algo-home-500 '>
        <div className='relative py-4 px-6 flex justify-between'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-100 via-zinc-100/90 dark:from-zinc-900 dark:via-zinc-900/80'></div>
        <div className='relative z-10 px-6 '>
          <h1 className='text-3xl font-bold'>数据结构</h1>
          <AlgoDataCard />
        </div>
      </section>
      <section className='relative z-10 px-6 pt-6'>
        <h2 className='text-3xl font-bold'>难搞的算法</h2>
        <AlgoCard />
      </section>
    </>
  );
}
