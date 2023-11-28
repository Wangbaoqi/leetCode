'use client';
import { Button, Kbd, link } from '@nextui-org/react';

import { SearchLinearIcon } from '@/components/icons';
import { useEffect, useState } from 'react';
import { isAppleDevice } from '@react-aria/utils';
import { clsx } from '@nextui-org/shared-utils';

interface SearchProps {
  className?: string;
}
export const Search: React.FC<SearchProps> = ({ className = '' }) => {
  const [commandKey, setCommandKey] = useState<Array<'ctrl' | 'command'>>([
    'command'
  ]);

  useEffect(() => {
    setCommandKey(isAppleDevice() ? ['command'] : ['ctrl']);
  }, []);

  const handleOpenCmdk = () => {};

  return (
    <Button
      aria-label='Quick search'
      className={clsx(
        'text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
        className
      )}
      endContent={
        <Kbd className='hidden py-0.5 px-2 lg:inline-block' keys={commandKey}>
          K
        </Kbd>
      }
      startContent={
        <SearchLinearIcon
          className='text-base text-default-400 pointer-events-none flex-shrink-0'
          size={18}
          strokeWidth={2}
        />
      }
      onPress={handleOpenCmdk}
    >
      Quick Search...
    </Button>
  );
};
