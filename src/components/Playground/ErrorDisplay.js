import React from 'react';
import styled from 'styled-components';

const ErrorDisplay = styled.p`
  background-color: var(--color-error);
  color: var(--color-background);
  padding: 12px 16px;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  font-size: 1rem;
  margin-bottom: 0;
`;

export default ErrorDisplay;
