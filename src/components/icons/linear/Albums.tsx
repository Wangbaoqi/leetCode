import { IconSvgProps } from '@/types';

export const AlbumsLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill='currentColor'
    height={height || size}
    width={width || size}
    {...props}
    viewBox='0 0 512 512'
  >
    <rect
      x='64'
      y='176'
      width='384'
      height='256'
      rx='28.87'
      ry='28.87'
      fill='none'
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth='32'
    />

    <path
      d='M144 80h224m-256 48h288'
      stroke='currentColor'
      strokeLinecap='round'
      strokeMiterlimit='10'
      strokeWidth='32'
    />
  </svg>
);
