import { clsx } from '@nextui-org/shared-utils';

interface Props {
  category: string;
  className?: string;
}

import { Chip } from '@nextui-org/react';

const COLORS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React: 'dark:bg-sky-400 bg-sky-700',
  EASY: 'dark:bg-difficulty-easy-dark bg-difficulty-easy',
  MEDIUM: 'dark:bg-difficulty-medium-dark bg-difficulty-medium',
  HARD: 'dark:bg-difficulty-hard-dark bg-difficulty-hard',
  EXTREME: 'dark:bg-difficulty-extreme-dark bg-difficulty-extreme',
  // this will never actually be used
  EVENT: 'dark:bg-difficulty-extreme-dark bg-difficulty-extreme'
};

export function DifficultyBadge({ className, category }: Props) {
  return (
    <Chip
      size='sm'
      radius='md'
      className={clsx(
        `duration-300 ${COLORS_BY_DIFFICULTY[category]} text-white dark:text-black`,
        className
      )}
    >
      {category}
    </Chip>
  );
}
