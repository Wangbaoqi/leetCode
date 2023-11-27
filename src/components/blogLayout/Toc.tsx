'use client';
import React from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { Heading } from '@/lib/docs/utils';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const paddingLeftByLevel: Record<number, string> = {
  1: 'pl-0',
  2: 'pl-0',
  3: 'pl-3',
  4: 'pl-3'
};

export function Toc({ headings }: { headings: Heading[] }) {
  const activeId = useScrollSpy(
    headings.map((toc) => `#${toc.id}`),
    {
      rootMargin: '0% 0% -90% 0%'
    }
  );

  return (
    <nav className='mb-8'>
      <h4 className='text-base font-medium mb-4'>Table of Contents</h4>
      {headings.map(
        (toc, idx) =>
          toc.level > 1 && (
            <a
              className={clsx(
                'block',
                'transition-colors',
                'text-sm text-default-600 dark:text-default-600',
                'hover:text-foreground hover:dark:text-foreground',
                'mt-3',
                `${paddingLeftByLevel[toc.level]}`,
                toc.id === activeId
                  ? 'text-foreground dark:text-foreground opacity-100'
                  : 'opacity-70'
              )}
              key={idx}
              href={`#${toc.id}`}
            >
              {toc.text}
            </a>
          )
      )}
    </nav>
  );
}
