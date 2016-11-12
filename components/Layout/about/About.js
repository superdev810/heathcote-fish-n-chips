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
      >
        <h1 className={cx(s.title, this.props.className)}>About</h1>
      </div>
    );
  }
}

export default About;
