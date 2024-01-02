'use client';
import React, { useEffect, useRef, useState } from 'react';

import { CodeEditor } from '@/components/monaco';
import { Description } from './Description';
import RightWrapper from './RightWrapper';
import LeftWrapper from './LeftWrapper';
import { iteratee } from 'lodash';
import type { Algo } from 'contentlayer/generated';
import CodePanel from '../monaco/CodePanel';
import { code } from '@nextui-org/react';
import { getEventDeltas } from '../monaco/utils';

export const MOBILE_BREAKPOINT = 1012;
const LEFT_PANEL_BREAKPOINT = 500;

type CodeType = {
  code: string;
  testCode: string;
};
interface Props {
  post: Algo | undefined;
  code: CodeType;
}
export function Layout({ post, code }: Props) {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const parent = useRef<HTMLDivElement>(null);
  const leftWrapper = useRef<HTMLDivElement>(null);
  const resizerWrapper = useRef<HTMLDivElement>(null);
  const rightWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > MOBILE_BREAKPOINT;
    const ref = resizerWrapper.current;
    const leftRef = leftWrapper.current;
    const rightRef = rightWrapper.current;

    if (!leftRef || !rightRef || !ref) return;

    if (isDesktop) {
      leftRef.style.width = '600px';
    } else {
      leftRef.style.height = '100%';
    }

    // current position of the mouse
    let x = 0;
    let y = 0;

    let leftWidth = 0;
    let topHeight = 0;

    setIsDesktop(isDesktop);

    const mouseMoveHandler = (event: MouseEvent | TouchEvent) => {
      const { dx, dy, currPosX, currPosY } = getEventDeltas(event, { x, y });
      console.log(dx, dy, currPosX, currPosY);
      const currPos = isDesktop ? currPosX : currPosY;
      const { width: divideByW, height: divideByH } =
        parent.current?.getBoundingClientRect() || { width: 0, height: 0 };

      const newDimensionValue = isDesktop
        ? ((leftWidth + dx) * 100) / divideByW
        : ((topHeight + dy) * 100) / divideByH;

      console.log(currPos, newDimensionValue);

      const panelSize =
        (newDimensionValue / 100) * (isDesktop ? divideByW : divideByH);
      const breakpointSize = isDesktop
        ? (LEFT_PANEL_BREAKPOINT / divideByW) * 100
        : (LEFT_PANEL_BREAKPOINT / divideByH) * 100;

      const sizeValue =
        panelSize < LEFT_PANEL_BREAKPOINT ? breakpointSize : newDimensionValue;

      isDesktop
        ? (leftRef.style.width = `${sizeValue}%`)
        : (leftRef.style.height = `${sizeValue}%`);

      const cursorStyle = isDesktop ? 'col-resize' : 'row-resize';

      document.body.style.cursor = cursorStyle;

      [rightRef, leftRef].forEach((ref) => {
        ref.style.pointerEvents = 'none';
        ref.style.userSelect = 'none';
      });
    };

    const mouseUpHandler = (event: MouseEvent | TouchEvent) => {
      // undo cursor col-resize from above
      document.body.style.removeProperty('cursor');

      // undo text selection prevention
      leftRef.style.removeProperty('user-select');
      rightRef.style.removeProperty('user-select');
      leftRef.style.removeProperty('pointer-events');
      rightRef.style.removeProperty('pointer-events');

      // Remove the handlers of `mousemove` and `mouseup` or `touchmove` and `touchend` from the `document`
      document.removeEventListener('touchmove', mouseMoveHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('touchend', mouseUpHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    const mouseDownHandler = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        // Get the current mouse position
        isDesktop ? (x = e.clientX) : (y = e.clientY);
      } else if (e instanceof TouchEvent) {
        // Get the current finger position
        isDesktop
          ? (x = e.touches[0]?.clientX ?? 0)
          : (y = e.touches[0]?.clientY ?? 0);
      }

      isDesktop
        ? (leftWidth = leftWrapper.current?.getBoundingClientRect().width!)
        : (topHeight = leftWrapper.current?.getBoundingClientRect().height!);

      // Attach the listeners to `document`
      if (e instanceof MouseEvent) {
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      } else if (e instanceof TouchEvent) {
        document.addEventListener('touchmove', mouseMoveHandler);
        document.addEventListener('touchend', mouseUpHandler, false);
      }
    };

    const resizeHandler = () => {
      const isDesktop = window.innerWidth > MOBILE_BREAKPOINT;
      setIsDesktop(isDesktop);

      if (!leftRef) return;

      const height = parseFloat(leftRef.style.height);
      const width = parseFloat(leftRef.style.width);

      if (isDesktop) {
        leftRef.style.width = `${600}px`;
      } else {
        leftRef.style.height = `100%`;
      }
    };

    window.addEventListener('resize', resizeHandler);
    ref.addEventListener('mousedown', mouseDownHandler);
    ref.addEventListener('touchstart', mouseDownHandler, false);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      ref.removeEventListener('mousedown', mouseDownHandler);
      ref.removeEventListener('touchstart', mouseDownHandler);
    };
  }, [isDesktop]);

  return (
    <div
      ref={parent}
      className='flex flex-col px-2 pt-2 lg:flex-row'
      style={{ height: 'calc(100vh - 3rem)' }}
    >
      <div
        ref={leftWrapper}
        className={`w-full overflow-hidden rounded-2xl border border-default-200/70 dark:border-default-100/80 bg-zinc-100 dark:bg-zinc-900`}
      >
        <LeftWrapper post={post} />
      </div>
      <div
        ref={resizerWrapper}
        className={`hidden lg:block resize group relative cursor-col-resize p-2`}
      >
        <div className='group-hover:bg-default-400 group-active:bg-default-700 absolute left-1/2 top-1/2 h-1 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-default-200 duration-300 lg:h-24 lg:w-1'></div>
      </div>
      <div
        ref={rightWrapper}
        className='hidden lg:flex min-h-[90px] w-full flex-1 flex-grow flex-col overflow-hidden rounded-2xl border border-default-200/70 dark:border-default-100/80 bg-zinc-100 dark:bg-zinc-900 lg:min-w-[500px]'
      >
        <CodePanel code={code} />
      </div>
    </div>
  );
}
