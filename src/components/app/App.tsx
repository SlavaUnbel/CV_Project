import { CssBaseline } from '@material-ui/core';
import React, { FC } from 'react';
import HeadRouter from './headRouter/HeadRouter';
import PageRouter from './pageRouter/PageRouter';
import PortfolioRouter from './portfolioRouter/PortfolioRouter';
import WorksRouter from './worksRouter/WorksRouter';

const App: FC = () => (
  <div className="app">
    <CssBaseline />

    <HeadRouter />

    <PageRouter />

    <PortfolioRouter />

    <WorksRouter />
  </div>
);

export default App;
