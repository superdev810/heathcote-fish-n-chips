import React, { Component } from 'react';
import './Assets/css/section.css';
import tea_cup from './Assets/images/tea_cup.png';
import zoomer from './Assets/images/zoomer.png';
import paper_fly from './Assets/images/paper_fly.png';
class Section6 extends Component {
  render() {
    var h1_style={
      fontFamily: 'bernardo1',
      fontSize:'6.0em',
      margin: '0 0 0 0',
      color:'#fff'
    };
    var h1_style_1={
      fontFamily: 'twcen',
      fontSize:'2.8em',
      margin: '0 0 0 0'
    };
    var p_style_1 = {
      fontSize:'2.5em',
      fontWeight:'600'
    };
    var p_style_2 = {
      fontSize:'2.5em',
      fontWeight:'600',
      maxWidth:'700px'
    }
    var tea_cup_img={
      width:'280px'
    };
    var zoomer_img={
      width:'380px'
    };
    return (
      <section className="section6">
        <div className="section6-top">
          <div className="row">
            <div className="tea_cup_div col-md-3">
              <img style={tea_cup_img} src={tea_cup} alt="teacupimg"/>
            </div>
            <div className="career_txt col-md-3">
              <h1 style={h1_style}>CAREER</h1>
            </div>
            <div className="zoomer_div col-md-3">
              <img src={zoomer} style={zoomer_img} alt="zoomerimg"/>
            </div>
            <div className="paper_fly_div col-md-3">
              <img src={paper_fly} alt="paperflyimg"/>
            </div>
          </div>
        </div>
        <div className="section6-bottom">
          <div className="row">
            <div className="Passionate col-md-6">
              <p style={p_style_1}>Passionate enough to join the ranks?</p>
              <p style={p_style_2}>We are always looking for fellow companions to join us in our quest to deliver the best service and amazing hospitality.</p>
            </div>
            <div className="detail col-md-6">
              <h1 style={h1_style_1}>YOUR DETAILS</h1>
              <div className="name-box row">
                <div className="box-left col-md-6">
                  <label>FIRST NAME</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
                <div className="box-right col-md-6">
                  <label>LAST NAME</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
              </div>
              <div className="birthday-box row">
                <div className="col-md-12">
                  <label>DATE OF BIRTH</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
              </div>
              <div className="certification-box row">
                <div className="box-left col-md-6">
                  <label>EMAIL</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
                <div className="box-right col-md-6">
                  <label>PHONE</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
              </div>
              <div className="name-box row">
                <div className="box-left col-md-6">
                  <label>ADDRESS</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
                <div className="box-right col-md-6">
                  <label>SUBURB</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
              </div>
              <div className="name-box row">
                <div className="box-left col-md-6">
                  <label>POSTCODE</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
                <div className="box-right col-md-6">
                  <label>STATE</label>
                  <br />
                  <input className="textbox" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="button-box col-md-4">
                  <input className="buttonbox" type="button" value="NEXT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section6;
