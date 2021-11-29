/* eslint-disable max-len */
import React from 'react';
import A4Page from '../A4Page/A4Page';
import Header from './Header/Header';
import List from './List/List';
import RelevantExperience from './RelevantExperience/RelevantExperience';
import Section from './Section/Section';
import Logo from '../Logo/Logo';

import donBoscoAsset from '../../assets/don_bosco.png';
import grollAsset from '../../assets/groll.png';
import atixAsset from '../../assets/atix.jpeg';
import cloudgaiaAsset from '../../assets/cloudgaia.png';
import peyaAsset from '../../assets/pedidosya.png';

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
            title="GROLL Ingeniería – Consultora Técnica"
            date="2017 – 2018"
            logo={<Logo alt="GROLL Ingeniería" src={grollAsset} />}
            jobTitle="Responsable del Área Técnica"
            descriptions={[
              'Encargado de los procesos de certificación de seguridad eléctrica y eficiencia energética. Seguimiento de las operaciones, manejo de la base de datos, coordinación para las distintas etapas del proceso de certificación, contacto con los clientes y generación de reportes. Mantenimiento y diseño de la página web. Desarrollo de aplicaciones web para la automatización de las distintas etapas de los procesos. Generación de reportes automáticos. Programación en PHP, HTML y CSS.',
            ]}
          />
          <RelevantExperience
            title="Atix Labs – Software Factory"
            date="2018 - 2019"
            logo={<Logo alt="Atix Labs" src={atixAsset} />}
            jobTitle="Fullstack Developer"
            descriptions={[
              'Desarrollo y mantenimiento de aplicaciones web. Programación en JavaScript. Manejo y diseño de bases de datos MongoDB. Testing unitario y E2E.',
              'Contacto diario con clientes a nivel internacional, brindando información de los avances y evoluciones de los proyectos además de cumplir con un rol activo en la toma de decisiones posteriores. Teconologías utilizadas: NodeJS, ReactJS, Meteor, Apollo, GraphQL, Cypress, Redux, entre otros.',
            ]}
          />
          <RelevantExperience
            title="Cloudgaia – Salesforce Partner"
            date="2019 - 2020"
            logo={<Logo alt="Clodgaia" src={cloudgaiaAsset} />}
            jobTitle="Salesforce Developer"
            descriptions={[
              'Implementación de distintos productos de Salesforce para los clientes con el uso de Lightning Components, Visualforce, Apex, Javascript',
              'Salesforce Knowledge (Base de Conocimientos): desarrollo custom frontend y backend para soportar artículos relacionados de manera jerárquica utilizando algoritmos recursivos para Telecom (empresa líder de Telecomunicaciones de Argentina)',
              'Salesforce CRM: desarrollo de nuevas funcionalidades y mantenimiento en la implementación de Coca-Cola.',
              'Salesforce Commerce Cloud: Implementación totalmente nueva para los e-commerces de Grupo Dabra (líder en productos deportivos en Latinoamérica) En la implementación se realizó una integración con tres nubes de Salesforce: Commerce Cloud, Service Cloud y Marketing Cloud.',
              'Además durante mi paso por Cloudgaia obtuve las certificaciones de: Salesforce Developer I, B2C Commerce Developer y Javascript Developer I',
            ]}
          />
          <RelevantExperience
            title="PedidosYa – Empresa de Producto"
            date="2020 – Actualidad"
            logo={<Logo alt="PedidosYa" src={peyaAsset} />}
            jobTitle="Full Stack Engineering"
            descriptions={[
              'En PedidosYa inicialmente formé parte del equipo de la Wallet, donde desarrollé el frontend web para una nueva funcionalidad que permitía pagar servicios a través de la aplicación. Para esto, el frontend web (hecho en React) se integró mediante Webviews en las aplicaciones Android y iOS de la empresa. Como desafíos interesantes tuve la interacción con el proveedor externo, la responsabilidad del end-to-end de la aplicación desarrollada (desde su concepción hasta su despliegue en producción y posterior monitoreo), la interacción e integración con otros equipos de la empresa y el aprendizaje de una nueva arquitectura de software (micro frontends).',
              'Luego formé parte del equipo de Checkout, en donde inicialmente trabajé en el desacople de las funcionalidades de agregado de tarjeta desde un servicio legacy a uno nuevo desarrollado en Golang. El proyecto siguiente fue el desarrollo del frontend del Checkout en un micrositio adecuándose a una nueva arquitectura de Backend que permitiera escalar el flujo de compra para distintos casos de uso dado el rápido crecimiento que sufrió la empresa en esos años. Para esto se aprovechó el caso de uso del relanzamiento del Programa de Lealtad de la empresa, en donde se permite a los usuarios suscribirse a planes mensuales a cambio de beneficios en la aplicación',
              'También participé como entrevistador técnico para los nuevos candidatos.',
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
            date="2014 – 2018"
            descriptions={['Para nivel secundario y universitario de física, matemática y química']}
          />
          <List.Item
            title="Puesto de diarios"
            date="2013 – 2017"
            descriptions={['Atención al cliente y repartidor']}
          />
        </List>
      </Section.Subsection>
    </Section>
    <Section>
      <Section.Title>Actividades extracurriculares</Section.Title>
      <List>
        <List.Item
          title="TECHO Argentina"
          date="2015 – Actualidad"
          descriptions={[
            'Voluntariado y construcción de viviendas de emergencia',
          ]}
        />
        <List.Item
          title="Parroquia Niño Jesús de Praga – Acasusso"
          date="2014 – 2019"
          descriptions={[
            'Coordinador de Catequesis de Confirmación',
            'Coordinador General del Ciclo de Confirmación',
          ]}
        />
        <List.Item
          title="Escuela San Rafael – San Fernando"
          date="2013 – 2019"
          descriptions={[
            'Voluntariado en actividades de entretenimiento infantil y apoyo escolar',
          ]}
        />
      </List>
    </Section>
    <Section>
      <Section.Title>Otras aptitudes y habilidades blandas</Section.Title>
      <List>
        <List.Item descriptions={['Responsable y organizado']} />
        <List.Item descriptions={['Comprometido y focalizado']} />
        <List.Item descriptions={['Proactivo']} />
        <List.Item descriptions={['Capacidad de liderazgo']} />
        <List.Item descriptions={['Respetuoso y honesto']} />
        <List.Item descriptions={['Inclusivo y buenas relaciones interpersonales']} />
      </List>
    </Section>
  </A4Page>
);

export default CV;
