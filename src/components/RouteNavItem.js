import React from 'react';
import PropTypes from 'prop-types';
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
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RouteNavItem;
