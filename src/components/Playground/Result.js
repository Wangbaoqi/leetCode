import React from 'react';
import styled from 'styled-components';

import useDebouncedValues from '@hooks/use-debounced-values.hook';
import Spinner from '@components/Spinner';

import constructSnippet from './utils/constructSnippet';
import ErrorDisplay from './ErrorDisplay';

const Result = React.memo(function Result({
  id,
  codeMap,
  mode,
  centered,
  stretched,
  boxSizing,
  layoutMode,
  isFullscreened,
  style = {},
}) {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [code, setCode] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    try {
      // TODO: Clearer args
      const code = constructSnippet({
        id,
        codeMap,
        mode,
        centered,
        boxSizing,
      });

      setCode(code);

      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, [id, codeMap, mode, boxSizing, centered]);

  React.useEffect(() => {
    function waitForMessage() {
      if (typeof window !== 'undefined') {
        window.addEventListener('message', (data) => {
          const frameId = `frame-${id}`;

          if (data.data.source !== frameId) {
            return;
          }

          if (data.data.message.type === 'error') {
            setError(data.data.message.data);
          }

          setLoading(false);
        });
      }
    }

    waitForMessage();
  }, [id]);

  // In most layout modes, the results pane sits side-by-side with
  // one or more code editors; to resize the results pane, we can
  // drag the divider between columns.
  // In Codepen, though, there is nothing beside the results pane.
  const resize =
    layoutMode === 'codepen'
      ? isFullscreened
        ? 'horizontal'
        : 'both'
      : undefined;

  return (
    <Wrapper
      style={{
        '--height': stretched ? '100%' : undefined,
        '--resize': resize,
        '--flex': stretched ? 1 : undefined,
        ...style,
      }}
    >
      {loading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      <FrameElem
        height="100%"
        width="100%"
        title={'example'}
        frameBorder="0"
        srcDoc={code}
        loading="lazy"
      />
      {error && <ErrorDisplay>{error}</ErrorDisplay>}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  flex: var(--flex);
  position: relative;
  border-radius: 4px;
  background: white;
  resize: var(--resize);
  width: 100%;
  max-width: 100%;
  height: var(--height);
  min-height: 250px;
  margin: 0 auto;

  /*
    Hide the corners if the frame sets a background
    color / goes right to the edge.
    Plus, allows the 'resize' property to work
  */
  overflow: hidden;

  /* prettier-ignore */
  box-shadow:
    0 0.4px 0.8px rgba(0, 0, 0, 0.028),
    0 1.3px 2.7px rgba(0, 0, 0, 0.042),
    0 6px 12px rgba(0, 0, 0, 0.07)
  ;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 16px;
  right: 16px;
  opacity: 0.5;
  color: black;
`;

const FrameElem = styled.iframe`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

/**
 * To improve performance, I'll debounce this component rendering
 * by 250ms.
 */
const DebouncedResult = (props) => {
  const debouncedProps = useDebouncedValues(250, props);

  return <Result {...debouncedProps} />;
};

export default DebouncedResult;
