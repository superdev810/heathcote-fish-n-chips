import React, { Component } from 'react';
import './Assets/css/sidemenu.css';
import facebook_icon from './Assets/images/fb.svg';
import social_site from './Assets/images/social.png';

class SideMenu extends Component {
  render() {
    var for_cursor={
      cursor:'pointer',
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    };
    var for_opacity_2={
      opacity:'1',
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    };
    var social_img={
      width:'70px'
    }
    return (
      <div className="menu">
      	<ul className="mainmenu">
      		<li className="m1 current" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
          <li className="m2" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
          <li className="m3" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
          <li className="m4" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
          <li className="m5" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
          <li className="m6" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
          <li className="m7" data-id="1" style={for_cursor}><div className="circle-o" style={for_opacity_2}></div></li>
      	</ul>
        <div className="logoFB"><a><img src={facebook_icon} alt="facebook" /></a></div>
        <div className="logoSC"><a><img style={social_img} src={social_site} alt="social" /></a></div>
      </div>
    );
  }
}
export default SideMenu;
