import React from 'react';
import styled from 'styled-components';
import Title from './Title/Title';

const Container = styled.section`
  padding: 0;
  margin: 0.35em 0;
`;

function Subsection({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Subsection.Title = Title;

export default Subsection;
