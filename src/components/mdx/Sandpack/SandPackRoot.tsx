'use client';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackPreview,
  SandpackTranspiledCode,
  SandpackFileExplorer,
  SandpackConsole,
  SandpackFile
} from '@codesandbox/sandpack-react';
import { CustomTheme } from './Themes';

import { PresetWrapper } from './CodeWrapper';
import { createFileMap } from './createFileMap';
import { Children, useState } from 'react';

type SandpackProps = {
  children: React.ReactNode;
  autorun?: boolean;
  showDevTools?: boolean;
};

export default function SandpackRoot(props: SandpackProps) {
  const { children, autorun = true, showDevTools = false } = props;
  const [devToolsLoaded, setDevToolsLoaded] = useState(false);
  const codeSnippets = Children.toArray(children) as React.ReactElement[];
  const files = createFileMap(codeSnippets);

  files['/styles.css'] = {
    code: [files['/styles.css']?.code ?? ''].join('\n\n'),
    hidden: !files['/styles.css']?.visible
  };

  return (
    <div className='sandpack w-full my-8 '>
      <SandpackProvider
        theme={CustomTheme}
        template='react'
        options={{
          initMode: 'user-visible',
          initModeObserverOptions: { rootMargin: '1400px 0px' },
          bundlerURL: 'https://1e4ad8f7.sandpack-bundler-4bw.pages.dev'
        }}
        {...props}
      >
        <PresetWrapper providedFiles={Object.keys(files)} />
      </SandpackProvider>
    </div>
  );
}
