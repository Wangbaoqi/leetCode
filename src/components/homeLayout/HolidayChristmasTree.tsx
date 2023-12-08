import React from 'react';
import { clsx } from '@nextui-org/shared-utils';

import {
  IconCircle,
  IconDiamond,
  IconPlus,
  IconSparkles,
  IconTriangle,
  IconRectangleVertical,
  IconReact
} from '@/components/icons';

const HOLIDAY_COLORS_BY_DIFFICULTY = {
  React: 'group-hover/card:text-sky-500',
  Structure: 'group-hover/card:text-yellow-500',
  Algo: 'group-hover/card:text-green-500',
  Browser: 'group-hover/card:text-red-500',
  Network: 'group-hover/card:text-purple-500',
  Toolchain: 'group-hover/card:text-cyan-500'
} as Record<string, string>;

const BALLS_POSITION_BY_DIFFICULTY = {
  React: [
    { right: '78', top: '45' },
    { right: '32', top: '120' }
  ],
  Structure: [
    { right: '40', top: '20' },
    { right: '79', top: '75' },
    { right: '32', top: '105' }
  ],
  Algo: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '65', top: '80' },
    { right: '38', top: '140' }
  ],
  Browser: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '70', top: '80' },
    { right: '32', top: '120' }
  ],
  Network: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '70', top: '80' },
    { right: '32', top: '120' },
    { right: '70', top: '140' }
  ],
  Toolchain: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '70', top: '80' }
  ]
} as Record<string, { right: string; top: string }[]>;

function HolidayChristmasBall({
  right,
  top,
  className
}: {
  right: string;
  top: string;
  className?: string;
}) {
  return (
    <IconCircle
      className={clsx(
        'absolute z-40 h-4 w-4 animate-pulse fill-current stroke-[0.5] text-black/10 opacity-0 blur-sm delay-300 duration-1000 group-hover/card:text-red-500 group-hover/card:opacity-100',
        className
      )}
      style={{
        top,
        right
      }}
    />
  );
}

export function HolidayChristmasTree({ difficulty }: { difficulty: string }) {
  const className = HOLIDAY_COLORS_BY_DIFFICULTY[difficulty];
  const balls = BALLS_POSITION_BY_DIFFICULTY[difficulty];

  return (
    <>
      <IconTriangle className='absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75]  text-black/10 opacity-10 duration-500 group-hover/card:-translate-x-[56px] group-hover/card:translate-y-32 group-hover/card:rotate-12 group-hover/card:scale-[2] group-hover/card:text-green-600/50 group-hover/card:opacity-100 dark:text-white ' />
      <IconTriangle className='absolute -right-14  -top-16  h-32 w-32 rotate-12 stroke-[0.4] text-black/10 opacity-10 duration-300 group-hover/card:-translate-x-10 group-hover/card:translate-y-8 group-hover/card:stroke-[0.66] group-hover/card:text-green-600/50  group-hover/card:opacity-100 dark:text-white' />
      <IconTriangle className='absolute -right-20  h-32 w-32 rotate-12 stroke-[0.4] text-black/10 opacity-10 duration-300 group-hover/card:-translate-x-[72px] group-hover/card:translate-y-6 group-hover/card:stroke-[0.66]  group-hover/card:text-green-600/50  group-hover/card:opacity-100 dark:text-white ' />
      <IconRectangleVertical className='absolute -bottom-10 right-0 h-16 w-16 text-black/10 opacity-0 duration-300 group-hover/card:-translate-x-[48px] group-hover/card:-translate-y-10 group-hover/card:rotate-12 group-hover/card:text-yellow-950/50 group-hover/card:opacity-100 dark:text-white' />
      {balls?.map((ball, idx) => (
        <HolidayChristmasBall
          key={idx}
          right={ball.right}
          top={ball.top}
          className={className}
        />
      ))}
    </>
  );
}

export function ChallengeDifficultyIcon({
  difficulty
}: {
  difficulty: string;
}) {
  switch (difficulty) {
    case 'React':
      return (
        <>
          <IconCircle className='group-hover/card:text-sky-300 dark:group-hover/card:text-sky-300 absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-90 dark:text-white/10' />
          <IconCircle className='group-hover/card:text-sky-300 dark:group-hover/card:text-sky-300 absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] text-black/10 duration-500 group-hover/card:scale-90 dark:text-white/10' />

          {/* <IconReact className='group-hover/card:text-sky-300 dark:group-hover/card:text-sky-300 absolute right-4 top-4 h-16 w-16 origin-top-right stroke-[1] text-black/10 duration-300  dark:text-white/10' /> */}
        </>
      );
    case 'Structure':
      return (
        <>
          <IconDiamond className='group-hover/card:text-yellow-300 dark:group-hover/card:text-yellow-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] text-black/10 duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10' />
          <IconDiamond className='group-hover/card:text-yellow-300 dark:group-hover/card:text-yellow-300 group-hover/card:r0 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] text-black/10 duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3' />
        </>
      );
    case 'Algo':
      return (
        <>
          <IconTriangle className='group-hover/card:text-green-300 dark:group-hover/card:text-green-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] text-black/10 duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10' />
          <IconTriangle className='group-hover/card:text-green-300 dark:group-hover/card:text-green-300 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] text-black/10 duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10' />
        </>
      );
    case 'Browser':
      return (
        <>
          <IconPlus className='group-hover/card:text-red-300 dark:group-hover/card:text-red-300 absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-0 dark:text-white/10' />
          <IconPlus className='group-hover/card:text-red-300 dark:group-hover/card:text-red-300 absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10' />
        </>
      );
    case 'Network':
      return (
        <>
          <IconPlus className='group-hover/card:text-purple-300 dark:group-hover/card:text-purple-300 absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-0 dark:text-white/10' />
          <IconPlus className='group-hover/card:text-purple-300 dark:group-hover/card:text-purple-300 absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10' />
        </>
      );
    case 'Toolchain':
      return (
        <>
          <IconSparkles className='group-hover/card:text-cyan-300 dark:group-hover/card:text-cyan-300 absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-0 dark:text-white/10' />
          <IconSparkles className='group-hover/card:text-cyan-300 dark:group-hover/card:text-cyan-300 absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10' />
        </>
      );
    default:
      return null;
  }
}
