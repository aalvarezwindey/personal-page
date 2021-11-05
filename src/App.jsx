import React from 'react';
import styled from 'styled-components';
import Theme from './theme/Theme';
import CV from './components/CV/CV';

const AppContainer = styled.main`
  text-align: center;
  background-color: #282c34;
`;

function App() {
  return (
    <Theme>
      <AppContainer>
        <CV />
      </AppContainer>
    </Theme>
  );
}

export default App;
