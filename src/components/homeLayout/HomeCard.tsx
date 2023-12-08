import React from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { MoreButton } from '../icons/MoreButton';
import { Carousel } from './Carousel';
import NextLink from 'next/link';
import { allPosts, Post, allAlgos, Algo } from 'contentlayer/generated';
import { FeatureBlogCard } from './FeatureBlogCard';
import { compareDesc } from 'date-fns';

interface HomeCardProps {
  title: string;
  tag: keyof typeof COLORS_BY_TAGS;
  redirectRoute: string;
}

const TITLES_BY_TAG: {
  [key: string]: string;
} = {
  React:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-sky-500 to-sky-500 dark:from-sky-500 dark:to-sky-200',
  Algo: 'bg-clip-text text-transparent select-none bg-gradient-to-r from-green-600 to-green-500 dark:from-green-300 dark:to-green-100',
  Structure:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-300 dark:to-yellow-100',
  Browser:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-red-600 to-red-500 dark:from-red-300 dark:to-red-100',
  Network:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-100',
  Toolchain:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-400 dark:to-cyan-100'
} as const;

export const COLORS_BY_TAGS = {
  React: 'dark:bg-sky-300 bg-sky-600/50',
  Algo: 'dark:bg-green-300 bg-green-500/50',
  Structure: 'dark:bg-yellow-300 bg-yellow-600/50',
  Browser: 'dark:bg-red-300 bg-red-600/50',
  Network: 'dark:bg-purple-300 bg-purple-600/50',
  Toolchain: 'dark:bg-cyan-300 bg-cyan-600/50',
  MEDIUM: 'dark:bg-yellow-300 bg-yellow-600/50',
  // this will never actually be used
  EVENT: 'dark:bg-purple-300 bg-purple-600/50'
} as const;

export function HomeCard({ title, tag, redirectRoute }: HomeCardProps) {
  const posts = allPosts
    .filter((post) => post.category === tag)
    .sort((a: Post, b: Post) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  return (
    <div>
      <div className='max-w-5.5xl mx-auto flex items-center justify-between gap-3 px-6 pt-5'>
        <h2
          className={`relative text-3xl font-bold tracking-tight ${TITLES_BY_TAG[tag]}`}
        >
          <div
            className={`absolute -left-8  h-12 w-32 rounded-full bg-pink-300/50 blur-3xl ${COLORS_BY_TAGS[tag]}`}
          ></div>
          {title}
        </h2>
        <MoreButton redirectRoute={redirectRoute} tag={tag} />
      </div>
      <section className='relative flex w-full flex-col overflow-hidden rounded-[2.5rem]'>
        <Carousel>
          {posts.map((post, idx) => (
            <NextLink
              key={idx}
              href={post.url}
              className='group relative rounded-2xl duration-300 sm:min-w-[300px] xl:min-w-[320px]'
            >
              <FeatureBlogCard blog={post} isHoliday />
            </NextLink>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
