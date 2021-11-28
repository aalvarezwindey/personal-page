import React from 'react';
import A4Page from '../A4Page/A4Page';
import Header from './Header/Header';
import List from './List/List';
import RelevantExperience from './RelevantExperience/RelevantExperience';
import Section from './Section/Section';
import Logo from '../Logo/Logo';

import donBoscoAsset from '../../assets/don_bosco.png';
import grollAsset from '../../assets/groll.png';

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
            title="Instituto Dr. Juan Segundo Fernández - Don Bosco (San Isidro)"
            date="2007 – 2013"
            descriptions={['Técnico Electromécanico y Bachiller en Bienes y Servicios', 'Promedio final: 8,45']}
          />
          <List.Item
            title="Universidad de Buenos Aires – Facultad de Ingeniería"
            date="2014 – 2021"
            descriptions={['Ingeniería Informática', 'Promedio final: 8,15']}
          />
        </List>
      </Section.Subsection>
      <Section.Subsection>
        <Section.Subsection.Title>Idiomas</Section.Subsection.Title>
        <List>
          <List.Item
            title="Español"
            descriptions={['Escrito: nativo', 'Oral: nativo']}
          />
          <List.Item
            title="Inglés"
            descriptions={['Escrito: avanzado', 'Oral: intermedio-avanzado']}
          />
        </List>
      </Section.Subsection>
    </Section>

    <Section>
      <Section.Title>Experiencia laboral</Section.Title>
      <Section.Subsection>
        <Section.Subsection.Title>Técnica</Section.Subsection.Title>
        <List>
          <RelevantExperience
            title="Proyectos pre-profesionales"
            date="2013"
            logo={<Logo alt="Proyectos pre-profesionales" src={donBoscoAsset} />}
            descriptions={[
              'Diseño e implementación de instalación eléctrica para aulas escolares',
              'Diseño e implementación de tablero eléctrico para taller de hojalatería',
            ]}
          />
          <RelevantExperience
            title="GROLL Ingeniería"
            date="2017 - 2018"
            logo={<Logo alt="GROLL Ingeniería" src={grollAsset} />}
            jobTitle="Responsable del Área Técnica"
            descriptions={[
              // eslint-disable-next-line max-len
              'Encargado de los procesos de certificación de seguridad eléctrica y eficiencia energética. Seguimientode las operaciones, manejo de la base de datos, coordinación para las distintas etapas del procesode certificación, contacto con los clientes y generación de reportes. Mantenimiento y diseño de lapágina web. Desarrollo de aplicaciones web para la automatización de las distintas etapas de losprocesos. Generación de reportes automáticos. Programación en PHP, HTML y CSS.',
            ]}
          />
        </List>
      </Section.Subsection>
      <Section.Subsection>
        <Section.Subsection.Title>No técnica</Section.Subsection.Title>
        <List>
          <List.Item
            title='Casa de comidas "La Amistad"'
            date="2014"
            descriptions={['Encargado de cocina']}
          />
          <List.Item
            title="Profesor particular"
            date="2014 - 2018"
            descriptions={['Para nivel secundario y universitario de física, matemática y química']}
          />
          <List.Item
            title="Puesto de diarios"
            date="2013 - 2017"
            descriptions={['Atención al cliente y repartidor']}
          />
        </List>
      </Section.Subsection>
    </Section>
  </A4Page>
);

export default CV;
