import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 0.45em;
  font-weight: 500;
  display: flex;
  margin-bottom: 0.8em;
`;

const Text = styled.span`
  background: inherit;
  display: inline;
  z-index: 1;
  padding-right: .2rem;
  position: relative;
  white-space: nowrap;
`;

const Dots = styled.div`
  flex-grow: 1;
  width: 100%;
  border-bottom: 2px dotted;
  margin-bottom: 4px;
  opacity: 0.5;
`;

const Title = ({ children }) => (
  <Header>
    <Text>{children}</Text>
    <Dots />
  </Header>
);

export default Title;
