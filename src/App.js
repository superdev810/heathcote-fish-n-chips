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

  handleNavLink(event) {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Heathcote Fish and Chips</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem onClick={this.handleNavLink} href="/find-us">Find Us</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(App);
