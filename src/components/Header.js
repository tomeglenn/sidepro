import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <a href="#">sidepro.io</a>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {};
}

export default connect(mapStateToProps)(Header);
