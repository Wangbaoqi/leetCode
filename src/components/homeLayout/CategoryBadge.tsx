import { clsx } from '@nextui-org/shared-utils';
import { Chip } from '@nextui-org/react';

interface Props {
  category: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const COLORS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React: 'dark:bg-sky-400 bg-sky-700 text-white dark:text-black ',
  Algo: 'dark:bg-green-400 bg-green-700 text-white dark:text-black ',
  Structure: 'dark:bg-yellow-400 bg-yellow-700 text-white dark:text-black ',
  Browser: 'dark:bg-red-400 bg-red-700 text-white dark:text-black ',
  Network: 'dark:bg-purple-400 bg-purple-700 text-white dark:text-black ',
  Toolchain: 'dark:bg-cyan-400 bg-cyan-700 text-white dark:text-black '
};

export function DifficultyBadge({ className, category, size = 'sm' }: Props) {
  return (
    <Chip
      size={size}
      radius='md'
      className={clsx(
        `duration-300 dark:bg-default-200  ${COLORS_BY_DIFFICULTY[category]} `,
        className
      )}
    >
      {category}
    </Chip>
  );
}
