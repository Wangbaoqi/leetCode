import styled from 'styled-components';

function Pane({ title, children, actions, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Header>
        <Title>{title}</Title>
        {actions}
      </Header>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 46px;
  font-weight: var(--font-weight-bold);
  cursor: default;
  margin: 0;
`;

export default Pane;
