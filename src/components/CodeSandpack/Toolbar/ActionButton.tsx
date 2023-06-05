import styled from 'styled-components';

import UnstyledButton from './UnstyledButton';

const ActionButton = styled(UnstyledButton)`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  svg {
    display: block;
  }
`;

export default ActionButton;
