import React, { useRef } from 'react';
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
interface CodeSplitProps {
  className?: string;
}
export default function CodeSplit({ className }: CodeSplitProps) {
  const { theme } = useTheme();
  const codeTheme = theme === 'dark' ? 'dark' : 'light';
  const codeRef = useRef<HTMLDivElement>(null);
  const resizer = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={codeRef}
      className={clsx('flex sandpack h-[calc(100%-_90px)] flex-col', className)}
    >
      <SandpackProvider template='test-ts' theme={codeTheme} options={{}}>
        <section className='overflow-hidden min-h-[350px]'>
          <CodeEditor
            className='overflow-hidden'
            height={'calc(50vh)'}
            // value={code}
          />
          {/* <SandpackCodeEditor /> */}
        </section>

        <div className='transition-all'>
          <div
            ref={resizer}
            className='group cursor-row-resize border-y border-default-200/10 p-2 '
          >
            <div className='group-hover:bg-default-200 group-active:bg-default-500 m-auto h-1 w-24 rounded-full bg-default-300 duration-300' />
          </div>
          <SandpackLayout className=' h-80'>
            <SandpackCodeEditor />
            <SandpackTests />
          </SandpackLayout>
        </div>
      </SandpackProvider>
    </div>
  );
}
