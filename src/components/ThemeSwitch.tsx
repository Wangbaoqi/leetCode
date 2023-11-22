'use client';

import { useTheme } from 'next-themes';
import { MoonFilledIcon, SunFilledIcon } from '@/components/icons';
import { useSwitch, SwitchProps } from '@nextui-org/react';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import clsx from 'clsx';

import { useIsSSR } from '@react-aria/ssr';
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  console.log(typeof window !== 'undefined');

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch({
    isSelected: theme === 'light',
    onChange
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx()
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx([
            'w-auto h-auto',
            'bg-transparent',
            'rounded-lg',
            'flex items-center justify-center',
            'group-data-[selected=true]:bg-transparent',
            '!text-default-600 dark:!text-default-500',
            'pt-px',
            'px-0',
            'mx-0'
          ])
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </Component>
  );
}
