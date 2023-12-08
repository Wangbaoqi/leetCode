import { memo } from 'react';
import { IconSvgProps } from '@/types';

export const IconTriangle = memo<JSX.IntrinsicElements['svg']>(
  function IconTriangle({
    className,
    size = 24,
    width,
    height,
    ...props
  }: IconSvgProps) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={className}
        height={size || height}
        width={size || width}
        {...props}
      >
        <path d='M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z' />
      </svg>
    );
  }
);
