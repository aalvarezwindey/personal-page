import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 0.4em 0;
  display: flex;
  align-items: center;
`;

const ItemMarker = styled.div`
  width: 0.22em;
  height: 0.22em;
  margin-right: 0.3em;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.primaryText}`};
`;

const ItemContent = styled.div`
  flex-grow: 1;
`;

const ItemHeader = styled.h4`
  font-size: 0.35em;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 0.25em;
`;

const ItemTitle = styled.span``;

const ItemDate = styled.span``;

const ItemDescription = styled.p`
  margin: 0;
  font-size: 0.30em;
`;

const ListItem = ({ title, date, descriptions = [] }) => (
  <Item>
    <ItemMarker />
    <ItemContent>
      <ItemHeader>
        <ItemTitle>{title}</ItemTitle>
        <ItemDate>{date}</ItemDate>
      </ItemHeader>
      {descriptions.map((desc) => <ItemDescription key={desc}>{desc}</ItemDescription>)}
    </ItemContent>
  </Item>
);

const List = ({ children }) => (
  <StyledList>{children}</StyledList>
);

List.Item = ListItem;

export default List;
