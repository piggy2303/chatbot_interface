import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Intent as IntentView,
  Greeting
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Intent" />
      <RouteWithLayout
        component={Greeting}
        exact
        layout={MainLayout}
        path="/Greeting"
      />
      <RouteWithLayout
        component={IntentView}
        exact
        layout={MainLayout}
        path="/Intent"
      />

      <RouteWithLayout
        component={IntentView}
        exact
        layout={MainLayout}
        path="/Entity"
      />
      {/* <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      /> */}
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
