'use client';
import { isValidElement, useState, useEffect } from 'react';
import * as React from 'react';
// import { CopyOutline as IconCopy } from '@nant-design/nant-icons/dist/react/CopyOutline';
// import { TerminalOutline as IconTerminal } from '@nant-design/nant-icons/dist/react/TerminalOutline';
import { IconCopy } from '../icons/Copy';

type LogLevel = 'info' | 'warning' | 'error';

interface TerminalBlockProps {
  level?: LogLevel;
  children: React.ReactNode;
}

function LevelText({ type }: { type: LogLevel }) {
  switch (type) {
    case 'warning':
      return <span className='text-yellow-50 bg-none mr-1'>Warning: </span>;
    case 'error':
      return <span className='text-red-40 mr-1'>Error: </span>;
    default:
      return null;
  }
}

function TerminalBlock({ level = 'info', children }: TerminalBlockProps) {
  let message: string | undefined;
  if (typeof children === 'string') {
    message = children;
  } else if (
    isValidElement(children) &&
    typeof children.props.children === 'string'
  ) {
    message = children.props.children;
  } else {
    throw Error('Expected TerminalBlock children to be a plain string.');
  }

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) {
      return;
    } else {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className='rounded-lg bg-gray-70 dark:bg-gray-50 h-full'>
      <div className='bg-gray-90 dark:bg-gray-60 w-full rounded-t-lg font-maple'>
        <div className='text-primary-dark dark:text-primary-dark flex text-sm px-4 py-2 relative justify-between'>
          <div className='flex items-center'>
            {/* <IconTerminal className='inline-flex text-xs mr-2 self-center' /> */}
            Terminal
          </div>
          <div>
            <button
              className='w-full flex items-center text-left text-primary-dark dark:text-primary-dark '
              onClick={() => {
                window.navigator.clipboard.writeText(message ?? '');
                setCopied(true);
              }}
            >
              <IconCopy className='inline-flex text-xs mr-2 self-center' />
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
      <div className='px-4 pt-4 pb-6 font-wotfard text-primary-dark dark:text-primary-dark whitespace-pre'>
        <LevelText type={level} />$ {message}
      </div>
    </div>
  );
}

export default TerminalBlock;
