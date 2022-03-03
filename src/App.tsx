import React from 'react';
import { Intro, Experiences, Education } from '@src/components';
import { Footer } from '@src/components/Footer';
import '@src/assets/styles/app.scss';

function App() {
  return (
    <div className="container">
      <Intro />

      <Experiences />

      <Education />

      <Footer />
    </div>
  );
}

export default App;
