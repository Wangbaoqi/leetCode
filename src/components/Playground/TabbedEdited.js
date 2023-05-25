import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Editor from './Editor';

function TabbedEditors({
  paneData,
  splitRatio,
  maxHeight,
  handleFormat,
  ...delegated
}) {
  const [firstPane, secondPane] = paneData;

  const [activeLanguage, setActiveLanguage] = React.useState(
    firstPane.language
  );

  const activePane =
    activeLanguage === firstPane.language ? firstPane : secondPane;

  // TODO: Better keyboard support
  // Reach UI?

  return (
    <Wrapper {...delegated}>
      <Triggers>
        {paneData.map((pane, index) => (
          <TabTrigger
            key={pane.language}
            style={{
              '--weight':
                pane === activePane
                  ? 'var(--font-weight-bold)'
                  : 'var(--font-weight-normal)',
              '--color':
                pane === activePane
                  ? 'var(--color-text)'
                  : 'var(--color-gray-300)',
            }}
            onClick={() => setActiveLanguage(pane.language)}
          >
            {pane.label}
          </TabTrigger>
        ))}
      </Triggers>
      <Editor
        code={activePane.code}
        language={activePane.language}
        handleUpdate={activePane.handleUpdate}
        handleFormat={handleFormat}
        maxHeight={maxHeight}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
`;

const Triggers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 46px;
`;

// TODO: Share styles with Pane#Heading
const TabTrigger = styled(UnstyledButton)`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: var(--weight);
  cursor: default;
  margin: 0 -4px;
  padding: 8px 4px;
  color: var(--color);
  cursor: pointer;

  &:focus {
    outline-offset: 0px;
  }
`;

export default TabbedEditors;
