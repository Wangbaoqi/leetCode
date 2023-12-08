import { memo } from 'react';
import { IconSvgProps } from '@/types';

export const IconPlus = memo<JSX.IntrinsicElements['svg']>(function IconPlus({
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
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  );
});
