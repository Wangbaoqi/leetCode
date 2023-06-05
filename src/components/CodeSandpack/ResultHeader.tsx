import React from 'react';
import styled from 'styled-components';

import UnstyledButton from './Toolbar/UnstyledButton';
import RefreshButton from './Toolbar/RefreshButton';
import ClearConsoleButton from './Toolbar/ClearConsoleButton';

function ResultHeader({ tabs, activeTab, handleSelectTab }) {
  const hasMultipleTabs = tabs.length > 1;

  if (!activeTab && !hasMultipleTabs) {
    activeTab = tabs[0];
  }

  return (
    <Wrapper>
      {tabs.map((tab) => {
        if (!hasMultipleTabs) {
          return (
            <ActiveTab key={tab} style={{ cursor: 'default' }}>
              {tab}
            </ActiveTab>
          );
        }

        const isActive = tab === activeTab;
        const Component = isActive ? ActiveTab : Tab;
        return (
          <Component
            key={tab}
            onClick={() => handleSelectTab(tab)}
          >
            {tab}
          </Component>
        );
      })}
      <Actions>
        {activeTab === 'console' ? (
          <ClearConsoleButton />
        ) : (
          <RefreshButton />
        )}
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border-bottom: 1px solid var(--color-gray-100);
  padding: 0px 16px;
`;

const Tab = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 8px;
  margin-bottom: -1px;
  border-bottom: 1px solid transparent;
  color: var(--sp-colors-clickable);
  text-transform: capitalize;

  &:first-of-type {
    margin-left: -8px;
  }
`;

const ActiveTab = styled(Tab)`
  color: white;
  border-bottom-color: var(--color-primary);
`;

const Actions = styled.div`
  margin-left: auto;
  margin-right: -10px;
`;

export default ResultHeader;
