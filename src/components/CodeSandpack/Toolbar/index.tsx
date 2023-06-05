import React from 'react';
import styled from 'styled-components';
import {
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react';

import FullscreenToggleButton from './FullscreenToggleButton';
import ResetButton from './ResetButton';
import FormatButton from './FormatButton';
import CodeSandboxButton from './CodeSandboxButton';
import CodeStatus from './CodeStatus';

function Toolbar({
  id,
  title,
  isFullscreened,
  handleToggleFullscreen,
  setEditorKey,
}) {
  const { refresh } = useSandpackNavigation();

  // Sticky header means that the playground can't be fullscreened.
  const omitFullscreenBtn = true;

  // Every sandbox needs an ID, so that I can store and retrieve
  // saved values from localStorage.
  //
  // I don't want the IDs to be *globally* unique, since that would
  // be very annoying. So I'll use the course/module/lesson slugs in
  // the key.
  //
  // Finally, because sandboxes can be included in "peeked" content,
  // I also need to check for the peek portion of the URL.
  // prettier-ignore
  const localStorageKey =
    `snippet-${id}`;

  const [codeStatus, setCodeStatus] = React.useState('clean');

  const supportsSaving = false;

  const { sandpack } = useSandpack();

  const hasMounted = React.useRef(false);

  function handleReset() {
    sandpack.resetAllFiles();
    setCodeStatus('clean');

    window.setTimeout(() => {
      refresh();
      setEditorKey(Math.random());
    }, 100);
  }

  return (
    <Wrapper>
      <Title>
        {title || 'Code Playground'}{' '}
        {supportsSaving && <CodeStatus status={codeStatus} />}
      </Title>
      <Actions>
        <ResetButton
          isFullscreened={isFullscreened}
          handleReset={handleReset}
        />
        <FormatButton />
        <CodeSandboxButton />
        {!omitFullscreenBtn && (
          <FullscreenToggleButton
            isFullscreened={isFullscreened}
            handleToggleFullscreen={handleToggleFullscreen}
          />
        )}
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  background: var(--color-gray-100);
  border-radius: 8px 8px 0 0;

  @media ${(p) => p.theme.breakpoints?.mdAndSmaller} {
    border-radius: 0px;
  }
`;

const Title = styled.p`
  font-size: 0.875rem;
  line-height: inherit;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-800);
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  /* Optical alignment */
  margin-right: -10px;

  // @media ${(p) => p.theme.breakpoints?.smAndSmaller} {
  //   display: none;
  // }
`;

export default Toolbar;
