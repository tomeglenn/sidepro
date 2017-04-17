import React, { Component } from 'react';

class ProjectLike extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log('Clicked like for project', this.props.id);
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>Like</a>
    );
  }
}

export default ProjectLike;
