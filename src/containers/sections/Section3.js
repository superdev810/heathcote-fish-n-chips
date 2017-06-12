import React, { Component } from 'react';
import './Assets/css/section.css';
import basilic from './Assets/images/basilic.png';
import menucart from './Assets/images/certification.png';
import huile from './Assets/images/huile.png';
import plate1 from './Assets/images/salade-lentilles.png';
import plate2 from './Assets/images/fruit_and_meat.png';
import descover from './Assets/images/descover.png';

class Section3 extends Component {
  render() {
    var svg1={
      strokeDasharray:'200px',
      strokeDashoffset:'200px'
    }
    var svg2={
      strokeDasharray:'1000px',
      strokeDashoffset:'1000px'
    }
    var svg3={
      strokeDasharray:'1000px',
      strokeDashoffset:'1000px'
    }
    var svg4={
      display:'none',
      strokeDasharray:'200px',
      strokeDashoffset:'200px'
    }
    return (
      <section className="section3">
          <div className="row">
            <div className="basilic col-md-4">
              <img src={basilic} alt="basilicimg" />
            </div>
            <div className="title col-md-4">
              <h2 className="take">TAKE</h2><h1 className="alook">A LOOK</h1><h2 className="atthe">AT THE</h2><h1 className="themenu">MENU</h1>
            </div>

            <div className="menucarte col-md-4">
              <img src={menucart} alt="menucartimg" id="menucartimg_id"/>
              <div className="rollover">
                <div className="roundbtn">
                  <div className="animation_final">
                    <img src={descover}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="huile col-md-4">
                <img src={huile} alt="huileimg"/>
              </div>
              <div className="plate1 col-md-4">
          			<img src={plate1} alt="plate1img" />
                <div className="rollover1">
                  <div className="roundbtn">
                    <div className="animation_final">
                      <img src={descover}/>
                    </div>
                  </div>
                </div>
          		</div>
              <div className="plate2 col-md-4">
          			<img src={plate2} alt="plate2img" />
                <div className="rollover2">
                  <div className="roundbtn">
                    <div className="animation_final">
                      <img src={descover}/>
                    </div>
                  </div>
                </div>
          		</div>
            </div>
            <svg id="tracescg1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 75.2 78.98">
                <path style={svg1} className="cls-1" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeMiterlimit="0" d="M4.34,1.09C-2.5,19.56,13,34.69,24.94,46.58A138.69,138.69,0,0,0,46.43,64.29a67.16,67.16,0,0,0,12.33,6.65c4.81,1.88,10.57,2.72,13.6,7.34"/>
            </svg>
            <svg id="tracescg2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 283 326">
                <path style={svg2} fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="0" className="cls-2" d="cls-1" d="M161,2a118,118,0,0,1,52,51c6,12,30,54,11,75s-41,18-55,8-9-10-20-16-10-5-17-6-20,4-26,7-24,13-29,33,12,46,16,51c28,30,75,18,77,18s30-8,38-23a38,38,0,0,1,7-10c2-2,9-9,20-10s24,6,27,8c21,15,20,47,20,56s0,29-13,45-25,18-31,20-15,3-26,4-30,2-39-4-9-10-19-25-14-24-19-28-31-7-41-6-17,4-35,11-23,9-36,13L0,278"/>
            </svg>
            <svg id="tracescg3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 399.68 193.34">
                <path style={svg3} className="cls-2" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="0" d="M390,128c-15,2-29-3-43-7s-26-6-39-3c-29,5-51,26-74,42s-52,26-82,29a246,246,0,0,1-43,0l-22-3c-8-2-13-6-18-12L40,140c-10-11-20-23-27-36S0,73,5,58,18,32,27,22,50,6,64,7s30,12,43,19,28,14,40,24,20,20,31,30,21,16,33,18,22-1,28-11,4-19,3-29-7-17-9-27a81,81,0,0,1-3-21"/>
            </svg>
            <svg id="tracescg4" style={svg4} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path className="cls-1" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeMiterlimit="0" d="M48,3V0s0,4,0,10,0,12,0,13-1,6,1,8l4,3,14,5,10,3,8,5c3,2,6,5,6,9a7,7,0,0,1-3,6c-2,1-4,1-6,1s-7-2-9-4a67,67,0,0,0-16-6L45,49a39,39,0,0,0-18,4c-7,3-10,6-12,10a13,13,0,0,0-2,9,14,14,0,0,0,2,6c3,5,14,10,29,14"/>
            </svg>
            <svg id="tracescg5" style={svg4} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path className="cls-1" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeMiterlimit="0" d="M48,3V0s0,4,0,10,0,12,0,13-1,6,1,8l4,3,14,5,10,3,8,5c3,2,6,5,6,9a7,7,0,0,1-3,6c-2,1-4,1-6,1s-7-2-9-4a67,67,0,0,0-16-6L45,49a39,39,0,0,0-18,4c-7,3-10,6-12,10a13,13,0,0,0-2,9,14,14,0,0,0,2,6c3,5,14,10,29,14"/>
            </svg>
            <div id="popup1" className="overlay">
        		<div className="popup">
              <img src={menucart} alt="menucartimg"/>
        			<a className="close">&times;</a>
        		</div>
        	</div>
      </section>
    );
  }
}

export default Section3;
