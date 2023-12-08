import { memo } from 'react';
import { IconSvgProps } from '@/types';

export const IconRectangleVertical = memo<JSX.IntrinsicElements['svg']>(
  function IconRectangleVertical({
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
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className={className}
        height={size || height}
        width={size || width}
        {...props}
      >
        <rect width='12' height='20' x='6' y='2' rx='2' />
      </svg>
    );
  }
);
