import React from 'react';
import A4Page from '../A4Page/A4Page';
import Header from './Header/Header';
import List from './List/List';
import Section from './Section/Section';

const CV = () => (
  <A4Page>
    <Header>
      <Header.Title>Ariel Justo Alvarez Windey</Header.Title>
    </Header>
    <Section>
      <Section.Title>Estudios cursados</Section.Title>
      <Section.Subsection>
        <Section.Subsection.Title>Historial académico</Section.Subsection.Title>
        <List>
          <List.Item
            title="Universidad de Buenos Aires – Facultad de Ingeniería"
            date="2014 – 2021"
            descriptions={['Ingeniería Informática', 'Promedio final: 8,15']}
          />
        </List>
      </Section.Subsection>
    </Section>
  </A4Page>
);

export default CV;
