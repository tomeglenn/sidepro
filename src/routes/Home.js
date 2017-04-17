import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopProjectsContainer from '../containers/TopProjectsContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <TopProjectsContainer />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {};
}

export default connect(mapStateToProps)(Home);
