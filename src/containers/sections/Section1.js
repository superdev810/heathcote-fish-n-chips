import React, { Component } from 'react';
import './Assets/css/section.css';
import scrollimg from './Assets/images/scroll-down.png';

class Section1 extends Component {
  render() {
    return (
      <section className="section1 section1-image">
      	<div className="parallax-window container">
      		<div className="textOverparallax col-md-6">
      			<h1>Heathcote Fish and Chips</h1>
      			<p>1353 Princes Hwy, Heathcote NSW 2233 (02) 9548 5031</p>
            <p>ince 1960</p>
      		</div>
          <div className="scrolldown_div">
            <label>SCROLL DOWN</label>
            <img src={scrollimg} alt="scrolldown" className="scroll-img"/>
          </div>
      	</div>
      </section>
    );
  }
}

export default Section1;
