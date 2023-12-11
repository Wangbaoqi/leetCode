'use client';
import React from 'react';
import Editor, {
  DiffEditor,
  useMonaco,
  loader,
  EditorProps
} from '@monaco-editor/react';

export function CodeEditor() {
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
      height={'calc(100%)'}
      defaultLanguage='javascript'
      defaultValue='// some comment'
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
    />
  );
}
