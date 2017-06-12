import React, { Component } from 'react';
import './Assets/css/section.css';
import thankyou_svg from './Assets/images/thankyou.svg';
import bachu from './Assets/images/Fenouil.png';

class Section7 extends Component {
  render() {
    var map_style={
      border:'0',
      verticalAlign: 'top',
      pointerEvents: 'none',
      frameborder:'0',
      allowfullscreen:'true'
    }
    var map_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.2996991791583!2d151.005593615216!3d-34.08746208059637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xcabcf860d2db439a!2sHeathcote+Fish+%26+Chips!5e0!3m2!1sen!2sau!4v1452852011788';
    return (
      <section className="footer-section">
        <div className="opening-times" id="opening-times">
          <h5 className="opening-time__heading">Opening times</h5>
          <div className="opening-time-table col-md-6">
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Monday</div>
              <div className="opening-time-table__time">Closed</div>
            </div>
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Tuesday</div>
              <div className="opening-time-table__time">12pm - 8pm</div>
            </div>
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Wednesday</div>
              <div className="opening-time-table__time">12pm - 8pm</div>
            </div>
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Thursday</div>
              <div className="opening-time-table__time">12pm - 8pm</div>
            </div>
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Friday</div>
              <div className="opening-time-table__time">12pm - 8pm</div>
            </div>
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Saturday</div>
              <div className="opening-time-table__time">12pm - 8pm</div>
            </div>
            <div className="opening-time-table__row">
              <div className="opening-time-table__date">Sunday</div>
              <div className="opening-time-table__time">12pm - 8pm</div>
            </div>
          </div>
          <div className="left-bachu">
            <img src={bachu}></img>
          </div>
          <div className="right-bachu">
            <img src={bachu}></img>
          </div>
        </div>
        <div id="find-us">
          <iframe width="100%" src={map_url} height="450" style={map_style}></iframe>
        </div>
          <div className="job-opportunities" id="work-with-us">
            <h5 className="opening-time__heading">Telephone</h5>
            <tel>(02) 9548 5031</tel>
          <div className="thank-you-img-wrap">
            <img src={thankyou_svg}  className="thank-you-img" alt="thankyou" />
          </div>
        </div>
      </section>
    );
  }
}

export default Section7;
