import React, { useState } from 'react';
import './app.scss';
import Contact from './contact/Contact';
import Header from './header/Header';
import Intro from './intro/Intro';
import Menu from './menu/Menu';
import Portfolio from './portfolio/Portfolio';
import Works from './works/Works';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openCloseMenu = (menuOpen: boolean) => setMenuOpen(menuOpen);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} onClick={openCloseMenu} />

      <Menu menuOpen={menuOpen} onClick={openCloseMenu} />

      <div className="sections">
        <Intro />

        <Portfolio />

        <Works />

        <Contact />
      </div>
    </div>
  );
}

export default App;
