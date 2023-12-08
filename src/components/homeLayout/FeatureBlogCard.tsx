import React from 'react';
import { clsx } from '@nextui-org/shared-utils';

import { Post } from 'contentlayer/generated';
import { HolidayChristmasTree } from './HolidayChristmasTree';
import { DifficultyBadge } from './CategoryBadge';
import { format } from 'date-fns';
interface CardProps {
  blog: Post;
}

const BORDERS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React:
    'dark:hover:border-sky-200 hover:border-sky-500 dark:group-focus:border-sky-200 group-focus:border-sky-500',
  EASY: 'dark:hover:border-difficulty-easy-dark hover:border-difficulty-easy dark:group-focus:border-difficulty-easy-dark group-focus:border-difficulty-easy',
  MEDIUM:
    'dark:hover:border-difficulty-medium-dark hover:border-difficulty-medium dark:group-focus:border-difficulty-medium-dark group-focus:border-difficulty-medium',
  HARD: 'dark:hover:border-difficulty-hard-dark hover:border-difficulty-hard dark:group-focus:border-difficulty-hard-dark group-focus:border-difficulty-hard',
  EXTREME:
    'dark:hover:border-difficulty-extreme-dark hover:border-difficulty-extreme dark:group-focus:border-difficulty-extreme-dark group-focus:border-difficulty-extreme',
  // this will never actually be used
  EVENT:
    'dark:hover:border-difficulty-extreme-dark hover:border-difficulty-extreme dark:group-focus:border-difficulty-extreme-dark group-focus:border-difficulty-extreme'
};

const SHADOWS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd]  dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]',
  EASY: 'hover:shadow-easy group-focus:shadow-easy dark:hover:shadow-easy-dark dark:group-focus:shadow-easy-dark',
  MEDIUM:
    'hover:shadow-medium group-focus:shadow-medium dark:hover:shadow-medium-dark dark:group-focus:shadow-medium-dark',
  HARD: 'hover:shadow-hard group-focus:shadow-hard dark:hover:shadow-hard-dark dark:group-focus:shadow-hard-dark',
  EXTREME:
    'hover:shadow-extreme group-focus:shadow-extreme dark:hover:shadow-extreme-dark dark:group-focus:shadow-extreme-dark',
  // this will never actually be used
  EVENT:
    'hover:shadow-extreme group-focus:shadow-extreme dark:hover:shadow-extreme-dark dark:group-focus:shadow-extreme-dark'
};

export function FeatureBlogCard({ blog }: CardProps) {
  return (
    <div
      className={`
        group/card relative overflow-hidden duration-300  rounded-2xl border border-default-200  sm:min-w-[300px] xl:min-w-[320px]
        ${SHADOWS_BY_DIFFICULTY[blog.category]}
        ${BORDERS_BY_DIFFICULTY[blog.category]}
      `}
    >
      <>
        <HolidayChristmasTree difficulty={blog.category} />
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
