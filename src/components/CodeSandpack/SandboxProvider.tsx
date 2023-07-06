import React from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';

import { transformValues } from '@site/src/utils';

import { useDuplicateIdWarning } from './helpers';
import presets from './presets';
import { styled } from 'styled-components';

// Instead of relying on CodeSandbox to always exist, I'm self-hosting
// the bundler code. It's deployed at a separate domain, using
// Vercel. Check it out on Github:
// https://github.com/joshwcomeau/sandpack-bundler
const BUNDLER_URL = 'https://sandpack-bundler.vercel.app/';

const SandboxProvider = ({
  id,
  preset = 'react',
  files,
  activePath,
  visibleFiles,
  fullBleed,
  dependencies = {},
  children,
}) => {
  const { template, files: presetFiles, ...presetData } = presets[
    preset
  ];


  const allFiles = {
    ...presetFiles,
    ...files,
  };

  // For all code passed in `files`, we want to trim any leading
  // or trailing whitespace / newlines. This is because it's easier
  // to add newlines when writing code in MDX
  const trimmedFiles = transformValues(allFiles, (name, file) => {
    if (typeof file === 'string') {
      return file.trim();
    } else {
      return {
        ...file,
        code: file.code.trim(),
      };
    }
  });

  // useDuplicateIdWarning(id);

  return (
    <Wrapper>
      <SandpackProvider
        template={template}
        files={trimmedFiles}
        options={{
          id,
          activeFile: activePath,
          visibleFiles: visibleFiles,
          bundlerURL: BUNDLER_URL,
          recompileMode: 'delayed',
          recompileDelay: 500,
        }}
        customSetup={{
          ...presetData,
          dependencies,
        }}
        className={fullBleed && 'full-bleed'}
      >
        {children}
      </SandpackProvider>
    </Wrapper>

  );
};

const Wrapper = styled.section`
  margin: 32px 16px
`

export default SandboxProvider;
