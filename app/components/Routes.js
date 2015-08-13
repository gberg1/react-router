'use strict';

import React from 'react';
import Router from 'react-router';

import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';
import Forum from './Forum';
import AddPlace from './AddPlace';
import Layout from './Layout';

import NotFound from './NotFound';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (
  <Route handler={Layout}>
    <DefaultRoute name="home" path="/home" handler={Home} />
    <Route name="profile" path="/profile" handler={Profile} />
    <Route name="feed" path="/feed" handler={Feed} />
    <Route name="forum" path="/forum" handler={Forum} />
    <Route name="add-place" path="/addplace" handler={AddPlace} />
    <NotFoundRoute name="not-found" handler={NotFound} />
  </Route>
);

export default routes;

