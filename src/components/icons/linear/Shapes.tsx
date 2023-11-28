import { IconSvgProps } from '@/types';

export const ShapesLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill='currentColor'
    height={height || size}
    width={width || size}
    viewBox='0 0 512 512'
    {...props}
  >
    <path
      d='M336 320H32L184 48l152 272z'
      fill='none'
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth='32'
    />

    <path
      d='M265.32 194.51A144 144 0 1 1 192 320'
      fill='none'
      stroke='currentColor'
      strokeLinejoin='round'
      strokeWidth='32'
    />
  </svg>
);
