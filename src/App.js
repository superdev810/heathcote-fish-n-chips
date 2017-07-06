/* eslint linebreak-style: ["error", "windows"] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import RouteNavItem from './components/RouteNavItem';
import Routes from './Routes';
import './App.css';
import './App_navbar.css';

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
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Nav>
            <RouteNavItem onClick={this.handleNavLink} href="/">Home</RouteNavItem>
          </Nav>
          <Nav>
            <RouteNavItem onClick={this.handleNavLink} href="#">Opening Times</RouteNavItem>
          </Nav>
          <Nav>
            <RouteNavItem onClick={this.handleNavLink} href="/find-us">Find Us</RouteNavItem>
          </Nav>
          <Nav>
            <RouteNavItem onClick={this.handleNavLink} href="#">Jobs</RouteNavItem>
          </Nav>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(App);
