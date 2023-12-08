import { memo } from 'react';
import { IconSvgProps } from '@/types';

export const IconReact = memo<JSX.IntrinsicElements['svg']>(function IconReact({
  className,
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) {
  return (
    <svg
      viewBox='-10.5 -9.45 21 18.9'
      width={width || size}
      className={className}
      {...props}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='0' cy='0' r='2' fill='currentColor'></circle>
      <g stroke='currentColor' strokeWidth='1' fill='none'>
        <ellipse rx='10' ry='4.5'></ellipse>
        <ellipse rx='10' ry='4.5' transform='rotate(60)'></ellipse>
        <ellipse rx='10' ry='4.5' transform='rotate(120)'></ellipse>
      </g>
    </svg>
  );
});
