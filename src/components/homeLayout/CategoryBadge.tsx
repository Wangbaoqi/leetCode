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
  React: 'dark:bg-sky-400 bg-sky-700',
  Algo: 'dark:bg-green-400 bg-green-700',
  Structure: 'dark:bg-yellow-400 bg-yellow-700',
  Browser: 'dark:bg-red-400 bg-red-700',
  Network: 'dark:bg-purple-400 bg-purple-700',
  Toolchain: 'dark:bg-cyan-400 bg-cyan-700'
};

export function DifficultyBadge({ className, category, size = 'sm' }: Props) {
  return (
    <Chip
      size={size}
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
