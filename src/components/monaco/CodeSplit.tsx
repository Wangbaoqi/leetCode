import React, { useEffect, useRef, useState } from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { CodeEditor } from './CodeEditor';
import {
  SandpackProvider,
  SandpackTests,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  SandpackCodeEditor,
  FileTabs,
  useSandpack
} from '@codesandbox/sandpack-react';
// import { sandpackDark } from "@codesandbox/sandpack-themes";

import { useTheme } from 'next-themes';
import { getEventDeltas } from './utils';
interface CodeSplitProps {
  className?: string;
}

const MIN_HEIGHT = 150;
const COLLAPSE_THRESHOLD = MIN_HEIGHT / 2;

function preventSelection(event: Event) {
  event.preventDefault();
}

export default function CodeSplit({ className }: CodeSplitProps) {
  const { theme } = useTheme();
  const [panelHeight, setPanelHeight] = useState(300);
  const codeTheme = theme === 'dark' ? 'dark' : 'light';
  const codeWrapper = useRef<HTMLDivElement>(null);
  const resizer = useRef<HTMLDivElement>(null);
  const testPanel = useRef<HTMLDivElement>(null);
  const testPanelBox = useRef<HTMLDivElement>(null);

  const { sandpack } = useSandpack();
  const { files, activeFile } = sandpack;
  const code = files[activeFile].code;
  console.log(sandpack);

  useEffect(() => {
    const resizerRef = resizer.current;
    const testPanelRef = testPanel.current;
    const testPanelBoxRef = testPanelBox.current;
    const wrapperRef = codeWrapper.current;

    if (!resizerRef || !testPanelRef || !testPanelBoxRef || !wrapperRef) {
      return;
    }

    let y = 0;
    let initHeight = testPanelRef.offsetHeight;

    const resizeHandle = () => {
      if (testPanelRef.offsetHeight >= MIN_HEIGHT) {
        testPanelRef.style.height = `${Math.min(
          testPanelRef.offsetHeight,
          wrapperRef.offsetHeight - 55
        )}px`;
      }
    };

    const mouseMoveHandler = (event: MouseEvent | TouchEvent) => {
      if (testPanelBoxRef.classList.contains('transition-all')) {
        testPanelBoxRef.classList.remove('transition-all');
      }

      document.body.style.setProperty('cursor', 'row-resize');

      const { dy } = getEventDeltas(event, { x: 0, y });

      const height = initHeight - dy;
      if (height >= MIN_HEIGHT) {
        const newHeight = Math.min(height, wrapperRef.offsetHeight);
        testPanelRef.style.height = `${newHeight}px`;
      } else if (height < COLLAPSE_THRESHOLD) {
        // testPanelRef.style.height = `${MIN_HEIGHT}px`;
      }
    };

    const mouseUpHandler = (event: MouseEvent | TouchEvent) => {
      testPanelBoxRef.classList.add('transition-all');
      document.body.style.removeProperty('cursor');

      document.removeEventListener('touchmove', mouseMoveHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('touchend', mouseUpHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      // Restore selection
      document.removeEventListener('selectstart', preventSelection);

      setPanelHeight(
        testPanelRef.offsetHeight < MIN_HEIGHT
          ? MIN_HEIGHT
          : testPanelRef.offsetHeight
      );
    };

    const mouseDownHandle = (e: MouseEvent | TouchEvent) => {
      initHeight = testPanelRef.offsetHeight;

      if (e instanceof TouchEvent) {
        y = e.touches[0]?.clientY ?? 0;
      } else if (e instanceof MouseEvent) {
        y = e.clientY;
      }

      if (e instanceof MouseEvent) {
        document.addEventListener('mousemove', mouseMoveHandler, false);
        document.addEventListener('mouseup', mouseUpHandler, false);
      } else if (e instanceof TouchEvent) {
        document.addEventListener('touchmove', mouseMoveHandler, false);
        document.addEventListener('touchend', mouseUpHandler, false);
      }

      document.addEventListener('selectstart', preventSelection);

      console.log(initHeight, y, 'dddddd');
    };

    window.addEventListener('resize', resizeHandle);
    window.addEventListener('mousedown', mouseDownHandle);
    window.addEventListener('touchstart', mouseDownHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
      window.removeEventListener('mousedown', mouseDownHandle);
      window.removeEventListener('touchstart', mouseDownHandle);
    };
  }, []);

  return (
    <div
      ref={codeWrapper}
      className={clsx('sandpack flex h-[calc(100%-_0px)] flex-col', className)}
    >
      <section className='overflow-hidden h-full'>
        <CodeEditor className='overflow-hidden' height={'100%'} value={code} />
      </section>

      <div className='transition-all' ref={testPanelBox}>
        <div
          ref={resizer}
          className='group cursor-row-resize border-y border-default-200/10 p-2 '
        >
          <div className='group-hover:bg-default-200 group-active:bg-default-500 m-auto h-1 w-24 rounded-full bg-default-300 duration-300' />
        </div>
        <div
          ref={testPanel}
          style={{
            height: `${panelHeight || MIN_HEIGHT}px`
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor />
            <SandpackTests />
          </SandpackLayout>
        </div>
      </div>
    </div>
  );
}
