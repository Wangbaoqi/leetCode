import React from 'react';
import { clsx } from '@nextui-org/shared-utils';

import {
  IconCircle,
  IconDiamond,
  IconPlus,
  IconSparkles,
  IconTriangle,
  IconRectangleVertical
} from '@/components/icons';

const HOLIDAY_COLORS_BY_DIFFICULTY = {
  React: 'group-hover/card:text-sky-500',
  EASY: 'group-hover/card:text-yellow-300',
  MEDIUM: 'group-hover/card:text-difficulty-medium',
  HARD: 'group-hover/card:text-difficulty-hard',
  EXTREME: 'group-hover/card:text-difficulty-extreme'
} as Record<string, string>;

const BALLS_POSITION_BY_DIFFICULTY = {
  React: [
    { right: '78', top: '45' },
    { right: '32', top: '120' }
  ],
  EASY: [
    { right: '40', top: '20' },
    { right: '79', top: '75' },
    { right: '32', top: '105' }
  ],
  MEDIUM: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '65', top: '80' },
    { right: '38', top: '140' }
  ],
  HARD: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '70', top: '80' },
    { right: '32', top: '120' }
  ],
  EXTREME: [
    { right: '40', top: '15' },
    { right: '24', top: '56' },
    { right: '70', top: '80' },
    { right: '32', top: '120' },
    { right: '70', top: '140' }
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
    case 'BEGINNER':
      return (
        <>
          <IconCircle className='group-hover/card:text-difficulty-beginner dark:group-hover/card:text-difficulty-beginner-dark absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-90 dark:text-white/10' />
          <IconCircle className='group-hover/card:text-difficulty-beginner dark:group-hover/card:text-difficulty-beginner-dark absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] text-black/10 duration-500 group-hover/card:scale-90 dark:text-white/10' />
        </>
      );
    case 'EASY':
      return (
        <>
          <IconDiamond className='group-hover/card:text-difficulty-easy dark:group-hover/card:text-difficulty-easy-dark absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] text-black/10 duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10' />
          <IconDiamond className='group-hover/card:text-difficulty-easy dark:group-hover/card:text-difficulty-easy-dark group-hover/card:r0 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] text-black/10 duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3' />
        </>
      );
    case 'MEDIUM':
      return (
        <>
          <IconTriangle className='group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] text-black/10 duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10' />
          <IconTriangle className='group-hover/card:text-difficulty-medium dark:group-hover/card:text-difficulty-medium-dark absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] text-black/10 duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10' />
        </>
      );
    case 'HARD':
      return (
        <>
          <IconPlus className='group-hover/card:text-difficulty-hard dark:group-hover/card:text-difficulty-hard-dark absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-0 dark:text-white/10' />
          <IconPlus className='group-hover/card:text-difficulty-hard dark:group-hover/card:text-difficulty-hard-dark absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10' />
        </>
      );
    case 'EXTREME':
      return (
        <>
          <IconSparkles className='group-hover/card:text-difficulty-extreme dark:group-hover/card:text-difficulty-extreme-dark absolute -right-4 -top-10 h-24 w-24 stroke-[0.5] text-black/10 duration-500 group-hover/card:-translate-x-4 group-hover/card:translate-y-10 group-hover/card:-rotate-[125deg] dark:text-white/10' />
          <IconSparkles className='group-hover/card:text-difficulty-extreme dark:group-hover/card:text-difficulty-extreme-dark absolute -right-14 -top-24 h-48 w-48 origin-top-right -rotate-3 stroke-[0.33] text-black/10 duration-300 group-hover/card:scale-50 dark:text-white/10' />
        </>
      );
    default:
      return null;
  }
}
