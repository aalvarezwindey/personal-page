import React from 'react';
import styled from 'styled-components';
import Subsection from './Subsection/Subsection';
import Title from './Title/Title';

const Container = styled.section`
  padding: 0;
  margin: 0.5em 0;
`;

function Section({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Section.Title = Title;
Section.Subsection = Subsection;

export default Section;
