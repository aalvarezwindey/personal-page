import React from 'react';
import styled from 'styled-components';

import A4Page from './components/A4Page/A4Page';

const AppContainer = styled.main`
  text-align: center;
  background-color: #282c34;
`;

function App() {
  return (
    <AppContainer>
      <A4Page />
    </AppContainer>
  );
}

export default App;
