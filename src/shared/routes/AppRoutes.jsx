import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import PrivateApp from '../../components/PrivateApp';
import SignInPage from '../../components/SignInPage/SignInPage';

const AppRoutes = () => (
  <Switch>
    <ProtectedRoute path="/app" component={PrivateApp} />
    <Route path="/login" component={SignInPage} />
    <Redirect to="/app" />
  </Switch>
);

export default AppRoutes;
