import React from 'react';
import { Intro, Experiences, Education } from '@src/components';
import { Skills } from '@src/components/Skills';
import { Footer } from '@src/components/Footer';
import '@src/assets/styles/app.scss';

function App() {
  return (
    <div className="container">
      <Intro />

      <Experiences />

      <Skills />

      <Education />

      <Footer />
    </div>
  );
}

export default App;
