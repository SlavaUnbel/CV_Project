import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  authProjectLoginPath,
  authProjectRegistrationPath,
} from '../../../utils/route';
import Login from '../../authProject/clientSide/login/Login';
import Registration from '../../authProject/clientSide/registration/Registration';

const WorksRouter: FC = () => (
  <Switch>
    <Route exact path={authProjectRegistrationPath} component={Registration} />
    <Route exact path={authProjectLoginPath} component={Login} />
  </Switch>
);

export default WorksRouter;
