'use client';
import React, { memo, useEffect, useRef, useState } from 'react';
import { clsx } from '@nextui-org/shared-utils';
import { CodeEditor } from './CodeEditor';
import {
  type SandpackFile,
  SandpackProvider,
  SandpackTests,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  SandpackCodeEditor,
  FileTabs,
  SandpackFileExplorer,
  useSandpack,
  SandpackReactContext
  // CodeEditor
} from '@codesandbox/sandpack-react';

import { useTheme } from 'next-themes';
import { getEventDeltas } from './utils';
import { EditorProps } from '@monaco-editor/react';
interface CodeSplitProps {
  className?: string;
}

const MIN_HEIGHT = 150;
const COLLAPSE_THRESHOLD = MIN_HEIGHT / 2;

function preventSelection(event: Event) {
  event.preventDefault();
}

export default memo(function CodeSplit({ className }: CodeSplitProps) {
  const { theme } = useTheme();
  const [panelHeight, setPanelHeight] = useState(300);
  const codeTheme = theme === 'dark' ? 'dark' : 'light';
  const codeWrapper = useRef<HTMLDivElement>(null);
  const resizer = useRef<HTMLDivElement>(null);
  const testPanel = useRef<HTMLDivElement>(null);
  const testPanelBox = useRef<HTMLDivElement>(null);
  const { sandpack } = useSandpack();
  const { code, updateCode } = useActiveCode();
  const { files, activeFile, updateFile } = sandpack;

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
    };

    // window.addEventListener('resize', resizeHandle);
    // window.addEventListener('mousedown', mouseDownHandle);
    // window.addEventListener('touchstart', mouseDownHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
      window.removeEventListener('mousedown', mouseDownHandle);
      window.removeEventListener('touchstart', mouseDownHandle);
    };
  }, []);

  const handleFileOnChange: EditorProps['onChange'] = (
    value: string | undefined,
    e
  ) => {
    updateCode(value || '');
  };

  const handleFileOnMount: EditorProps['onMount'] = (editor, monaco) => {};

  const handleFileOnValidate: EditorProps['onValidate'] = (markers) => {
    console.log(markers, 'markers');
  };

  return (
    <div
      ref={codeWrapper}
      className={clsx('sandpack flex h-[calc(100%-_0px)] flex-col', className)}
    >
      <div className='sticky top-0 flex h-[40px] shrink-0 items-center justify-end gap-4 border-b border-default-200/70 dark:border-default-100/80 px-3 py-2 '>
        <div className='flex justify-between w-full'>
          <div className='h-full w-[fit-content] px-4 '>
            <FileTabs />
          </div>
          <div className=''>setting</div>
        </div>
      </div>
      <SandpackFileExplorer />
      <CodeEditor
        key={activeFile}
        value={code}
        onMount={handleFileOnMount}
        onChange={handleFileOnChange}
        onValidate={handleFileOnValidate}
      />
      {/* <div className='h-[200px]'>
        <SandpackLayout>
          <SandpackTests />
        </SandpackLayout>
      </div> */}
    </div>
  );
});
