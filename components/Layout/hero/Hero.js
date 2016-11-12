import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './hero.css';

class Hero extends React.Component {

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
        className={cx(s.hero, this.props.className)}
        ref={node => (this.root = node)}
        style={{ backgroundImage: 'url(./images/hero-background.jpg)' }}
      >
        <div className={cx(s.content, this.props.className)}>
          <h1 className={cx(s.title, this.props.className)}>Heathcote Fish and Chips</h1>
          <div className={cx(s.slugan, this.props.className)}>Since 1960</div>
          <address className={cx(s.address, this.props.className)}>
            1353 Princes Hwy, Heathcote, NSW, 2233
          </address>
          <tel className={cx(s.tel, this.props.className)}>(02) 9548 5031</tel>
        </div>
      </div>
    );
  }
}

export default Hero;
