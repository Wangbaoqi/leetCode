'use client';
import React, { useEffect, useMemo } from 'react';
import Editor, {
  DiffEditor,
  useMonaco,
  loader,
  EditorProps
} from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useSandpack } from '@codesandbox/sandpack-react';

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

  const { sandpack } = useSandpack();
  const { files, activeFile } = sandpack;
  const monaco = useMonaco();

  const code = files['/add.ts'].code;

  useEffect(() => {
    // Monaco
    //   .init()
    //   .then((monaco) => {
    //     import("monaco-themes/themes/Blackboard.json").then((data) => {
    //       monaco.editor.defineTheme("Blackboard", data);
    //       setIsThemeLoaded(true);
    //     });
    //   })
    //   .catch((error) =>
    //     console.error(
    //       "An error occurred during initialization of Monaco: ",
    //       error
    //     )
    //   );
    console.log(monaco, 'Monaco');
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
      defaultLanguage='typescript'
      defaultValue={code}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}
