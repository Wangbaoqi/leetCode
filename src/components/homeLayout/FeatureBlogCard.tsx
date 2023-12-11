import React from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { Post, Algo } from 'contentlayer/generated';
import {
  ChallengeDifficultyIcon,
  HolidayChristmasTree
} from './HolidayChristmasTree';
import { DifficultyBadge } from './CategoryBadge';
import { format } from 'date-fns';
interface CardProps {
  blog: Post;
  isHoliday?: boolean;
}

const BORDERS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React:
    'dark:hover:border-sky-200 hover:border-sky-500 dark:group-focus:border-sky-200 group-focus:border-sky-500',
  Algo: 'dark:hover:border-green-200 hover:border-green-500 dark:group-focus:border-green-200 group-focus:border-green-500',
  Structure:
    'dark:hover:border-yellow-200 hover:border-yellow-500 dark:group-focus:border-yellow-200 group-focus:border-yellow-500',
  Browser:
    'dark:hover:border-red-200 hover:border-red-500 dark:group-focus:border-red-200 group-focus:border-red-500',
  Network:
    'dark:hover:border-purple-200 hover:border-purple-500 dark:group-focus:border-purple-200 group-focus:border-purple-500',
  Toolchain:
    'dark:hover:border-cyan-200 hover:border-cyan-500 dark:group-focus:border-cyan-200 group-focus:border-cyan-500'
};

const SHADOWS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd]  dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]',
  Algo: 'hover:shadow-[0_0_16px_-2.4px_#FBDBA7] hover:shadow-green-200 group-focus:shadow-easy dark:hover:shadow-easy-dark dark:group-focus:shadow-easy-dark',
  Structure:
    'hover:shadow-[0_0_16px_-2.4px_#FBDBA7]  group-focus:shadow-[0_0_16px_-2.4px_#FBDBA7] dark:hover:shadow-[0_0_16px_-2.4px_#FBDBA7] dark:group-focus:shadow-[0_0_16px_-2.4px_#FBDBA7]',
  Browser:
    'hover:shadow-[0_0_16px_-2.4px_#fecaca] group-focus:shadow-[0_0_16px_-2.4px_#fecaca] dark:hover:shadow-[0_0_16px_-2.4px_#fecaca] dark:group-focus:shadow-[0_0_16px_-2.4px_#fecaca]',
  Network:
    'hover:shadow-[0_0_16px_-2.4px_#e9d5ff] group-focus:shadow-[0_0_16px_-2.4px_#e9d5ff] dark:hover:shadow-[0_0_16px_-2.4px_#e9d5ff] dark:group-focus:shadow-[0_0_16px_-2.4px_#e9d5ff]',
  Toolchain:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd] group-focus:shadow-[0_0_16px_-2.4px_#bae6fd] dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]'
};

export function FeatureBlogCard({ blog, isHoliday = false }: CardProps) {
  return (
    <div
      className={`
        group/card relative overflow-hidden duration-300 rounded-2xl border border-default-200/50 sm:min-w-[300px] sm:max-w-[300px] xl:max-w-[320px]
        ${SHADOWS_BY_DIFFICULTY[blog.category]}
        ${BORDERS_BY_DIFFICULTY[blog.category]}
      `}
    >
      <>
        {isHoliday ? (
          <HolidayChristmasTree difficulty={blog.category} />
        ) : (
          <ChallengeDifficultyIcon difficulty={blog.category} />
        )}
      </>
      <div className='relative flex flex-col items-start gap-1 py-5 p-6'>
        <h2 className='max-w-[75%] truncate text-[20px] font-medium duration-300'>
          {blog.title}
        </h2>
        <div className='flex items-center gap-5 text-center duration-300'>
          <DifficultyBadge category={blog.category} />
        </div>
      </div>
      <section className='relative flex flex-col justify-between gap-2 rounded-xl p-6 pt-0 pb-0 duration-300'>
        <div className='flex items-center gap-2 flex-nowrap'>
          <div className='-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20'>
            @{blog.author}
          </div>
          <div className='text-default-500 whitespace-nowrap text-sm'>
            {format(new Date(blog.date), 'yyyy-MM-dd')}
          </div>
        </div>
        <div className='relative h-20 pb-4 leading-[1.425rem] text-sm text-default-500 '>
          <p className='line-clamp-3'>{blog.excerpt}</p>
        </div>
      </section>
    </div>
  );
}
