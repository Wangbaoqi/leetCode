import cn from 'clsx';
import * as React from 'react';
import { forwardRefWithAs } from './forwardRefWithAs';

// import { LinkOutline } from '@nant-design/nant-icons/dist/react/LinkOutline';

export interface HeadingProps {
  className?: string;
  isPageAnchor?: boolean;
  children: React.ReactNode;
  id?: string;
  as?: any;
}

const Heading = forwardRefWithAs<HeadingProps, 'div'>(function Heading(
  { as: Comp = 'div', className, children, id, isPageAnchor = true, ...props },
  ref
) {
  let label = 'Link for this heading';
  if (typeof children === 'string') {
    label = 'Link for ' + children;
  }

  const headClass = cn(
    className,
    'relative flex items-center scroll-mt-20 gap-2 group'
  );

  const anchorClass = cn(
    'absolute top-1/2 -left-8  -translate-y-1/2 opacity-0 group-hover:opacity-100'
  );

  return (
    <Comp id={id} {...props} ref={ref} className={headClass}>
      {isPageAnchor && (
        <a
          href={`#${id}`}
          aria-label={label}
          title={label}
          className={anchorClass}
        >
          {/* <LinkOutline className='text-lg' /> */}
        </a>
      )}
      {children}
    </Comp>
  );
});

export const H1 = ({ className, ...props }: HeadingProps) => (
  <Heading
    as='h1'
    className={cn(className, 'text-3xl font-display font-bold leading-tight')}
    {...props}
  />
);

export const H2 = ({ className, ...props }: HeadingProps) => (
  <Heading
    as='h2'
    className={cn(
      'text-2xl font-display leading-10 text-primary dark:text-primary-dark font-bold my-6',
      className
    )}
    {...props}
  />
);

export const H3 = ({ className, ...props }: HeadingProps) => (
  <Heading
    as='h3'
    className={cn(
      className,
      'text-xl font-display leading-9 text-primary dark:text-primary-dark font-bold my-6'
    )}
    {...props}
  />
);

export const H4 = ({ className, ...props }: HeadingProps) => (
  <Heading
    as='h4'
    className={cn(className, 'text-lg font-display font-bold leading-9 my-4')}
    {...props}
  />
);
