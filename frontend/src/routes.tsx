import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import CreateEvent from './pages/event/CreateEvent';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterOrg from './pages/RegisterOrg';
import RegisterClt from './pages/RegisterClient';
import UpdateEvent from './pages/event/UpdateEvent';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <PrivateRoute component={Home} path="/home" />
        <Route component={RegisterOrg} path="/register-organizer" />
        <Route component={RegisterClt} path="/register-client" />
        <PrivateRoute component={CreateEvent} path="/create-event" />
        <PrivateRoute component={UpdateEvent} path="/update-event" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
