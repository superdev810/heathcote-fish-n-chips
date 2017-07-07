import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link,
} from 'react-router-dom';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import RouteNavItem from './components/RouteNavItem';
import Routes from './Routes';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleNavLink = this.handleNavLink.bind(this);
  }

  handleNavLink(event) {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="layout__wrap">
        <div className="layout__nav-wrap">
          <Navbar fluid collapseOnSelect className="container layout__navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <Link className="website__home-link" to="/">Heathcote Fish and Chips</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <RouteNavItem
                  onClick={this.handleNavLink}
                  href="/about-us"
                  className="layour__nav-link"
                >
                  About Us
                </RouteNavItem>
                <RouteNavItem
                  onClick={this.handleNavLink}
                  href="/our-menu"
                  className="layour__nav-link"
                >
                  Our Menu
                </RouteNavItem>
                <RouteNavItem
                  onClick={this.handleNavLink}
                  href="/reviews"
                  className="layour__nav-link"
                >
                  Reviews
                </RouteNavItem>
                <RouteNavItem
                  onClick={this.handleNavLink}
                  href="/our-team"
                  className="layour__nav-link"
                >
                  Our Team
                </RouteNavItem>
                <RouteNavItem
                  onClick={this.handleNavLink}
                  href="/find-us"
                  className="layour__nav-link"
                >
                  Find Us
                </RouteNavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(App);
