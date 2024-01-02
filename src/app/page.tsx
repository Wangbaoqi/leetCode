'use client';
import Image from 'next/image';
import { allPosts, allAlgos } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { clsx } from '@nextui-org/shared-utils';

import { Button } from '@nextui-org/button';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { MDXComponents } from '@/components/mdx';
import { ThemeSwitcher } from '@/components/ThemeSwitch';
import { NavBar, Footer } from '@/components/blogLayout';
import { motion } from 'framer-motion';

import { IconSparkles } from '@/components/icons';
import { Suspense } from 'react';
import { HomeCard } from '@/components/homeLayout/HomeCard';

export default function Home() {
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='mt-10'>
        <div className='container flex-grow mx-auto max-w-5.5xl px-6 flex justify-center'>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
            className={clsx(
              'relative group/card flex w-full h-32 flex-col items-center justify-center overflow-hidden rounded-sm bg-zinc-200 p-4 text-center duration-300 dark:bg-zinc-900 md:max-w-[800px]'
            )}
          >
            <IconSparkles className='group-hover/card:text-sky-200 dark:group-hover/card:text-sky-200-dark absolute -right-4 -top-10 h-24 w-24 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-x-4 group-hover/card:translate-y-10 group-hover/card:-rotate-[125deg] dark:text-white/10' />
            <IconSparkles className='group-hover/card:text-sky-200 dark:group-hover/card:text-sky-200-dark absolute -left-1 bottom-1 h-48 w-48  -rotate-12 stroke-[0.33] text-black/10 duration-700 group-hover/card:-translate-y-5  group-hover/card:translate-x-5 group-hover/card:rotate-[160deg]  group-hover/card:scale-75 dark:text-white/10' />
          </a>
        </div>
        <Suspense fallback={'loading'}>
          <HomeCard
            title='Posts for React'
            tag='React'
            redirectRoute='/tags/react'
          />
        </Suspense>
        <Suspense fallback={'loading'}>
          <HomeCard
            title='Posts for DataStructure'
            tag='Structure'
            redirectRoute='/tags/structure'
          />
        </Suspense>
        <Suspense fallback={'loading'}>
          <HomeCard
            title='Posts for Browser'
            tag='Browser'
            redirectRoute='/tags/structure'
          />
        </Suspense>
        <Suspense fallback={'loading'}>
          <HomeCard
            title='Posts for Network'
            tag='Network'
            redirectRoute='/tags/network'
          />
        </Suspense>
        <Suspense fallback={'loading'}>
          <HomeCard
            title='Posts for Toolchain'
            tag='Toolchain'
            redirectRoute='/tags/toolchain'
          />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
