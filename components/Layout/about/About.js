import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './about.css';

class About extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div
        id="#about"
        className={cx(s.about, this.props.className)}
        ref={node => (this.root = node)}
        style={{ backgroundImage: 'url(./images/about-us.png)'}}>
       <div className={cx(s.content, this.props.className)}>
          <heathcote className={cx(s.heathcote, this.props.className)}>heathcote Fish & Chips</heathcote>
          <history className={cx(s.history, this.props.className)}>"A tradition of fish & chips since 1960"</history>
          <business className={cx(s.business, this.props.className)}>

            Family run business located in the Heathcote NSW offering best seafood in south east sydney.
            We are located on Princes Highway - opposite Heathcote train station and that puts us close to
            Royal National park.
            Our seafood is made from the finest local and imported ingredients and include Fish & Chips, 
            Seafood Basket, Grill Packs, BBQ Seafood Platters,
            Fish Burger, Homemade Fish Cakes, Homemade Potato Scallops, 
            freshly battered Fish Cocktails and Calamari Rings as well as variety of kids and family packages.
            We also offer a range of freshly made Salads, Hot Snacks, 
            Chicken Nuggets and Chicken schnitzel. 
            Our good reputation is based on providing quality seafood, genuinely friendly service, 
            and maintaining high food safety and hygiene standards.
          </business>
        </div>
      </div>
    );
  }
}

export default About;
