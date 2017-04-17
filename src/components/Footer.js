import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div id="footer">
        <p>&copy; {year} sidepro.io</p>
      </div>
    );
  }
}

export default Footer;
