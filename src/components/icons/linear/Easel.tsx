import { IconSvgProps } from '@/types';

export const EaselLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    height={height || size}
    width={width || size}
    {...props}
    fill='currentColor'
    viewBox='0 0 512 512'
  >
    <rect
      x='48'
      y='80'
      width='416'
      height='272'
      rx='32'
      ry='32'
      fill='none'
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth='32'
    />

    <path
      d='M256 416v-64m0-272V48m144 416-32-112M112 464l32-112'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='32'
    />
  </svg>
);
