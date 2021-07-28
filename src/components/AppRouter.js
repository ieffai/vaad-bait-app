import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MAIN_ROUTE } from '../constants/constants';
import { publicRoutes } from '../routes';

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
