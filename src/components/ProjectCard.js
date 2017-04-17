import React, { Component } from 'react';
import ProjectLike from './ProjectLike';
import styles from './ProjectCard.css.js';

class ProjectCard extends Component {
  render() {
    return (
      <div style={styles.projectCard}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <ProjectLike id={this.props.id} />
      </div>
    );
  }
}

export default ProjectCard;
