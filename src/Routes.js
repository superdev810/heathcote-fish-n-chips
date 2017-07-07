import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound';
import Home from './containers/Home';
import AboutUs from './containers/AboutUs';
import OurMenu from './containers/OurMenu';
import Reviews from './containers/Reviews';
import OurTeam from './containers/OurTeam';
import Career from './containers/Career';
import FindUs from './containers/FindUs';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about-us" exact component={AboutUs} />
    <Route path="/our-menu" exact component={OurMenu} />
    <Route path="/reviews" exact component={Reviews} />
    <Route path="/our-team" exact component={OurTeam} />
    <Route path="/career" exact component={Career} />
    <Route path="/find-us" exact component={FindUs} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);
