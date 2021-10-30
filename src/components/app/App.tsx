import React, { FC } from 'react';
import AppHeader from './appHeader/AppHeader';
import AppRouter from './appRouter/AppRouter';

const App: FC = () => (
  <div className="app">
    <AppHeader />

    <AppRouter />
  </div>
);

export default App;
