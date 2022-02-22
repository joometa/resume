import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Intro, Experiences, Education } from '../src/components';
// import './assets/styles/app.scss';

const Wrap = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
  background-color: lightblue;
`;

function App() {
  return (
    <Wrap>
      <Intro />

      <Experiences />

      <Education />
    </Wrap>
  );
}

export default App;
