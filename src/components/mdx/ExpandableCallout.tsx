'use client';

import { useRef } from 'react';
import * as React from 'react';
import { clsx } from '@nextui-org/shared-utils';

import {
  NoteLinearIcon as IconNote,
  WarningLinearIcon as IconWarning,
  PitfallLinearIcon as IconPitfall
} from '@/components/icons';

type CalloutVariants = 'deprecated' | 'pitfall' | 'note' | 'wip';

interface ExpandableCalloutProps {
  children: React.ReactNode;
  type: CalloutVariants;
}

const variantMap = {
  deprecated: {
    title: 'Deprecated',
    Icon: IconWarning,
    containerClasses: 'bg-danger-100 dark:bg-danger-300 dark:bg-opacity-20',
    textColor: 'text-danger-600 dark:text-danger-200',
    linkBorder: '[&>p>a]:border-danger-600 [&>p>a]:border-opacity-100',
    overlayGradient:
      'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)'
  },
  note: {
    title: 'Note',
    Icon: IconNote,
    containerClasses: 'bg-success-100 dark:bg-success-300 dark:bg-opacity-20',
    textColor: 'text-success-600 dark:text-success-200',
    linkBorder: '[&>p>a]:border-success-600 [&>p>a]:border-opacity-100 ',
    overlayGradient:
      'linear-gradient(rgba(245, 249, 248, 0), rgba(245, 249, 248, 1)'
  },
  pitfall: {
    title: 'Pitfall',
    Icon: IconPitfall,
    containerClasses: 'bg-warning-100 dark:bg-warning-300 dark:bg-opacity-20',
    textColor: 'text-warning-600 dark:text-warning-200',
    linkBorder: '[&>p>a]:border-warning-600 [&>p>a]:border-opacity-100',
    overlayGradient:
      'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)'
  },
  wip: {
    title: 'Under Construction',
    Icon: IconNote,
    containerClasses: 'bg-cyan-100 dark:bg-cyan-300 dark:bg-opacity-20',
    textColor: 'text-cyan-600 dark:text-cyan-200',
    linkBorder: '[&>p>a]:border-cyan-500 [&>p>a]:border-opacity-100',
    overlayGradient:
      'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)'
  }
};

function ExpandableCallout({
  children,
  type = 'note'
}: ExpandableCalloutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const variant = variantMap[type];

  return (
    <div
      className={clsx(
        'pt-8 pb-4 px-5 sm:px-8 my-8 relative rounded-none shadow-inner-border sm:mx-auto sm:rounded-2xl',
        variant.containerClasses
      )}
    >
      <h3
        className={clsx(
          'text-xl flex items-center gap-1 font-display font-bold mt-1',
          variant.textColor
        )}
      >
        <variant.Icon className={clsx('inline ', variant.textColor)} />
        {variant.title}
      </h3>
      <div className='relative'>
        <div
          ref={contentRef}
          className={clsx(
            'py-2',
            '[&>p>a]:text-inherit [&>p>a]:dark:text-inherit [&>p>a]:font-medium',
            'hover:[&>p>a]:border-b-1.5',
            variant.linkBorder
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default ExpandableCallout;
