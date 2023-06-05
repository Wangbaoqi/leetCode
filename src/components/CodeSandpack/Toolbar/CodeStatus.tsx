import React from 'react';
import styled from 'styled-components';

function CodeStatus({ status }) {
  if (status === 'modified') {
    return (
      <Wrapper
        style={{
          fontSize: '1.5em',
          lineHeight: '1rem',
          transform: 'translateY(37%)',
        }}
      >
        *
      </Wrapper>
    );
  } else if (status === 'restored') {
    return (
      <Wrapper
        style={{
          color: 'hsl(50deg 80% 60%)',
        }}
      >
        (Restored)
      </Wrapper>
    );
  }

  return null;
}

const Wrapper = styled.span`
  display: inline-block;
  margin-left: 8px;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    display: none;
  }
`;

export default CodeStatus;
