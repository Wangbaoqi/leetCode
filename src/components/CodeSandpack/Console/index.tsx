import React from 'react';
import styled from 'styled-components';

import CodeEditorContext from '../CodeEditorContext';
import Log from './Log';

function Console() {
  const { logs } = React.useContext(CodeEditorContext);
  const wrapperRef = React.useRef(null);

  // Remember their scroll position. If they're at the top, keep
  // them at the top.
  React.useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [logs]);

  if (logs.length === 0) {
    return null;
  }

  return (
    <Wrapper ref={wrapperRef}>
      {logs.map((log) => (
        <Log key={log.id} {...log} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ol`
  list-style-type: none;
  max-height: 100%;
  overflow: auto;
  overflow-wrap: break-word;
  overflow-wrap: anywhere;
  padding: 0;
`;

export default Console;
