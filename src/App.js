import React from 'react';
import styled from 'styled-components';

import './App.css';
import Home from './pages/Home';

const Main = styled.main`
display: flex;
justify-content: center;
`
const Container = styled.div`
width: 1000px;
padding: 60px 0;
`

function App() {

  return (
    <Main>
      <Container>
          <Home />
      </Container>
    </Main>
  );
}

export default App;
