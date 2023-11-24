import Image from 'next/image';
import { allPosts, Post, allAlgos, Algo } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { Button } from '@nextui-org/button';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { MDXComponents } from '@/components/mdx';
import { ThemeSwitcher } from '@/components/ThemeSwitch';
import { NavBar, PostWrapper } from '@/components/blogLayout';

export default function Home() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='container mx-auto max-w-5xl px-6 flex-grow'>
        <div className='h-24'></div>
      </div>
    </div>
  );
}
