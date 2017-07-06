import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Home from './containers/Home';
import FindUs from './containers/FindUs';
import AboutUs from './containers/AboutUs';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about-us" exact component={AboutUs} />
    <Route path="/find-us" exact component={FindUs} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);
