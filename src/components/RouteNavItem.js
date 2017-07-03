import React from 'react';
import { Route } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

const RouteNavItem = props => (
  <Route
    path={props.href}
    exact
    children={({ match }) => (  // eslint-disable-line react/no-children-prop
      <NavItem {...props} active={!!match}>{ props.children }</NavItem>
    )}
  />
);

RouteNavItem.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default RouteNavItem;
