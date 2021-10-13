import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthProjectContainer from '../../../containers/authProject/AuthProjectContainer';
import { authProjectPath } from '../../../utils/route';

const WorksRouter: FC = () => (
  <Switch>
    <Route exact path={authProjectPath} component={AuthProjectContainer} />
  </Switch>
);

export default WorksRouter;
