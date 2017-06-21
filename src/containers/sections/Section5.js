import React, { Component } from 'react';
import equipe1 from './Assets/images/our-team/sarvenaz.JPG';
import equipe2 from './Assets/images/equipe2.jpg';
import equipe3 from './Assets/images/equipe3.jpg';
import './Assets/css/section.css';

class Section5 extends Component {
  render() {
    return (
      <section className="section5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="paragraph col-md-3">
    				<h1>OUR TEAM </h1>
            <p>Everybody is at your service to offer the best experience possible.</p>
        	</div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="equipe1"><img src={equipe1} alt="equipe1img" /></div>
            <div className="equipe3"><img src={equipe3} alt="equipe3img" /></div>
          </div>
          <div className="col-md-6">
            <div className="equipe2"><img src={equipe2} alt="equipe2img" /></div>
          </div>

        </div>

      </section>
    );
  }
}

export default Section5;
