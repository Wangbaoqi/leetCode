'use client';
import React, { useMemo } from 'react';
import Editor, {
  DiffEditor,
  useMonaco,
  loader,
  EditorProps
} from '@monaco-editor/react';
import { useTheme } from 'next-themes';

export type CodeEditorProps = Omit<EditorProps, 'theme'>;

const DEFAULT_OPTIONS = {
  fixedOverflowWidgets: true,
  lineNumbers: 'on',
  tabSize: 2,
  insertSpaces: false,
  minimap: {
    enabled: false
  },
  fontSize: 14
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

  function handleEditorChange(value, event) {
    // here is the current value
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    console.log('onMount: the editor instance:', editor);
    console.log('onMount: the monaco instance:', monaco);
  }

  function handleEditorWillMount(monaco: any) {
    console.log('beforeMournt: the monaco instance:', monaco);
  }

  function handleEditorValidation(markers: any) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }
  return (
    <Editor
      theme={editorTheme}
      options={editorOptions}
      {...props}
      height={'calc(100%)'}
      defaultLanguage='typescript'
      defaultValue='// some comment'
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}
