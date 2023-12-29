'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Editor, {
  DiffEditor,
  useMonaco,
  loader,
  EditorProps,
  Monaco
} from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import {
  SandpackStack,
  useActiveCode,
  useSandpack
} from '@codesandbox/sandpack-react';

export type CodeEditorProps = Omit<EditorProps, 'theme'>;

const DEFAULT_OPTIONS = {
  fixedOverflowWidgets: true,
  lineNumbers: 'on',
  tabSize: 2,
  insertSpaces: false,
  minimap: {
    enabled: false
  },
  fontSize: 14,
  fontFamily: 'MapleMono'
} as const satisfies EditorProps['options'];

export function CodeEditor({
  onChange,
  onMount,
  options,
  value,
  ...props
}: CodeEditorProps) {
  const { theme } = useTheme();
  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';
  const editorOptions = useMemo(() => {
    return {
      ...DEFAULT_OPTIONS
    };
  }, []);

  return (
    <SandpackStack className='overflow-hidden h-full'>
      <Editor
        theme={editorTheme}
        options={editorOptions}
        {...props}
        defaultLanguage='typescript'
        value={value}
        defaultValue={value}
        onChange={onChange}
      />
    </SandpackStack>
  );
}
