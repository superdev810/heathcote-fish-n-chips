import React, { Component } from 'react';
import './Assets/css/section.css';

class Section2 extends Component {
  render() {
    return (
      <section className="section2 section2-image">
      	<div className="parallax-window">
      			<h1>About us</h1>
            <h2 className="about-us-sub-headline">"A tradition of classic fish & chips since 1960"</h2>
            <p className="about-us-text">Family run business located in the Heathcote NSW offering best seafood in south east Sydney. We are located on Princes Highway - opposite Heathcote train station and that puts us close to Royal National Park.
              Our seafood is made from the finest local and imported ingredients and include Fish & Chips, Seafood Basket, Grill Packs, BBQ Seafood Platters, Fish Burger, Homemade Fish Cakes, Homemade Potato Scallops, freshly battered Fish Cocktails and Calamari Rings as well as variety of kids and family packages. We also offer a range of freshly made Salads, Hot Snacks, Chicken Nuggets and Chicken Schnitzel.
              Our good reputation is based on providing quality seafood, genuinely friendly service, and maintaining high food safety and hygiene standards.</p>
      	</div>
      </section>
    );
  }
}

export default Section2;
