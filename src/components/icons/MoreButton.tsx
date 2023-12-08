'use client';
import React from 'react';
import { ChevronRightLinearIcon } from './linear';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

interface ViewMoreButtonProps {
  redirectRoute: string;
  tag: keyof typeof BUTTON_BY_TAGS;
}

export const BUTTON_BY_TAGS = {
  Structure:
    'bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20',
  Algo: 'bg-green-500/10 text-green-700 hover:text-green-700 dark:text-green-300 dark:bg-green-300/10 hover:bg-green-500/20 dark:hover:bg-green-300/20',
  React:
    'bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20',
  Browser:
    'bg-red-500/10 text-red-700 hover:text-red-700 dark:text-red-300 dark:bg-red-300/10 hover:bg-red-500/20 dark:hover:bg-red-300/20',

  Toolchain:
    'bg-cyan-500/10 text-cyan-700 hover:text-cyan-700 dark:text-cyan-300 dark:bg-cyan-300/10 hover:bg-cyan-500/20 dark:hover:bg-cyan-300/20',
  MEDIUM:
    'bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20',
  Network:
    'bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20',
  // this will never actually be used
  EVENT:
    'bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20'
} as const;

export function MoreButton({ redirectRoute, tag }: ViewMoreButtonProps) {
  const router = useRouter();
  return (
    <Button
      className={`group items-center whitespace-nowrap  pl-4 pr-2 backdrop-blur-sm
      ${BUTTON_BY_TAGS[tag]}`}
      onClick={() => router.push(redirectRoute)}
      radius='full'
      size='sm'
    >
      View More
      <ChevronRightLinearIcon className='ml-2 h-4 w-4 stroke-[3] duration-300 group-hover:translate-x-1' />
    </Button>
  );
}
