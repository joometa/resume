import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Intro, Experiences, Education } from '../src/components';
import '@src/assets/styles/app.scss';

const Wrap = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;

function App() {
  return (
    <div className="container">
      <Intro />

      <Experiences />

      <Education />
    </div>
  );
}

export default App;
