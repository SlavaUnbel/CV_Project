import React, { useState } from 'react';
import './app.scss';
import Contact from './contact/Contact';
import Header from './header/Header';
import Intro from './intro/Intro';
import Portfolio from './portfolio/Portfolio';
import Testimonials from './testimonials/Testimonials';
import Works from './works/Works';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />

        <Portfolio />

        <Works />

        <Testimonials />

        <Contact />
      </div>
    </div>
  );
}

export default App;
