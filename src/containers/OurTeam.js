import React from 'react';
import './OurTeam.css';

const OurTeam = () => (
  <div className="our-team__wrap">
    <div className="our-team">
      <div className="our-team__column-left">
        <img className="our-team__image" src="/images/our-team/team-photo-1.jpg" />
        <img className="our-team__image-small" src="/images/our-team/team-photo-3.jpg" />
      </div>
      <div className="our-team__column-right">
        <div className="our-team__description-wrap">
          <h1 className="our-team__main-title">Our Team</h1>
          <p className="our-team__description">Everybody is at your service to offer the best experience possible.</p>
          <img className="our-team__image" src="/images/our-team/team-photo-2.jpg" />
        </div>
      </div>
    </div>
  </div>
);

export default OurTeam;
