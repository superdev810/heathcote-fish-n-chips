import React, { Component } from 'react';
import Menu from './sections/SideMenu';
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Section6 from './sections/Section6'
import Section7 from './sections/Section7'

class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    );
  }
}

export default Home;
