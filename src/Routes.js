import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getUserInformation } from './utils/Utils';
import { Home } from './views/Home';
import { Start } from './views/Start';
import { Profile } from './views/Profile';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let user = getUserInformation();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/start',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const Routes = ({ isLoggedin, userInformation }) => {
  return (
    <Switch>
      <Route
        path="/profile/:username"
        render={(props) => {
          return <Profile {...props} />;
        }}
      ></Route>
      <PrivateRoute path="/home">
        <Home userInformation={getUserInformation()} />
      </PrivateRoute>
      <Route
        path="/start"
        render={(props) => {
          return isLoggedin ? (
            <Redirect to="/" />
          ) : (
            <Start disableHeader={true} {...props} />
          );
        }}
      ></Route>
      <Route
        exact
        path="/"
        render={(props) => {
          return isLoggedin ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/start" />
          );
        }}
      ></Route>
    </Switch>
  );
};
