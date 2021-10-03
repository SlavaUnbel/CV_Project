import { CssBaseline } from '@material-ui/core';
import React, { FC } from 'react';
import HeadRouter from './headRouter/HeadRouter';
import PageRouter from './pageRouter/PageRouter';

const App: FC = () => (
  <div className="app">
    <CssBaseline />

    <HeadRouter />

    <PageRouter />
  </div>
);

export default App;
