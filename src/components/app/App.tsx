import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import PageRouter from './pageRouter/PageRouter';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openCloseMenu = (menuOpen: boolean) => setMenuOpen(menuOpen);

  return (
    <div style={{ height: '100vh' }}>
      <Route component={Header} />
      <Route component={Menu} />

      <PageRouter />
    </div>
  );
}

export default App;
