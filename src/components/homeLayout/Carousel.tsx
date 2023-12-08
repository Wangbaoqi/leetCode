import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { ChevronRightLinearIcon } from '@/components/icons';
import { useResizeObserver } from '@/hooks/useResizeObserve';
interface CarouselProps {
  children: React.ReactNode;
}
export function Carousel({ children }: CarouselProps) {
  const id = useId();
  const buttonRightSelector = `slideRight-${id}`;
  const buttonLeftSelector = `slideLeft-${id}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const containerElement = containerRef.current;

  const handleScroll = useCallback(() => {
    if (containerElement) {
      const scrollLeft = containerElement.scrollLeft;
      const scrollWidth = containerElement.scrollWidth;
      const clientWidth = containerElement.clientWidth;

      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  }, [containerElement]);

  useResizeObserver(containerRef, handleScroll);

  useEffect(() => {
    const handleSlideRight = () => {
      if (containerElement) {
        containerElement.scrollLeft += 330;
      }
    };

    const handleSlideLeft = () => {
      if (containerElement) {
        containerElement.scrollLeft -= 330;
      }
    };

    const buttonRight = containerElement?.querySelector(
      `[id="${buttonRightSelector}"]`
    );
    const buttonLeft = containerElement?.querySelector(
      `[id="${buttonLeftSelector}"]`
    );

    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll);
    }

    if (buttonRight) {
      buttonRight.addEventListener('click', handleSlideRight);
    }

    if (buttonLeft) {
      buttonLeft.addEventListener('click', handleSlideLeft);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('scroll', handleScroll);
      }
      if (buttonRight) {
        buttonRight.removeEventListener('click', handleSlideRight);
      }
      if (buttonLeft) {
        buttonLeft.removeEventListener('click', handleSlideLeft);
      }
    };
  }, [handleScroll, containerElement, buttonRightSelector, buttonLeftSelector]);

  return (
    <div
      id='blogContainer'
      ref={containerRef}
      className='flex w-full snap-x flex-nowrap gap-4 overflow-x-scroll hide-scrollbar scroll-smooth p-6 px-4 md:px-10'
    >
      {children}
      <button
        className={clsx(
          'absolute left-40 top-1/2 hidden -translate-y-1/2 rounded-[5rem] border border-neutral-400 bg-neutral-200/50 px-2 py-4 backdrop-blur-sm duration-300 focus:outline-none focus-visible:ring-2 active:scale-75 dark:border-neutral-600 dark:bg-neutral-700/50',
          showLeftButton && 'sm:block'
        )}
        id={`slideLeft-${id}`}
        aria-hidden={!showLeftButton}
        aria-label='Slide carousel of challenges to the left'
      >
        <ChevronRightLinearIcon className=' rotate-180 h-4 w-4 stroke-[3]' />
      </button>
      <button
        className={clsx(
          'absolute right-40 top-1/2 hidden -translate-y-1/2 rounded-[5rem] border border-neutral-400 bg-neutral-200/50 px-2 py-4 backdrop-blur-sm duration-300 focus:outline-none focus-visible:ring-2 active:scale-75 dark:border-neutral-600 dark:bg-neutral-700/50',
          showRightButton && 'sm:block'
        )}
        id={`slideRight-${id}`}
        aria-hidden={!showRightButton}
        aria-label='Slide carousel of challenges to the right'
      >
        <ChevronRightLinearIcon className='h-4 w-4 stroke-[3]' />
      </button>
    </div>
  );
}
