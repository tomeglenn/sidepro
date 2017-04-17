import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import ProjectCard from '../components/ProjectCard';

class Home extends Component {
  handleClick(event) {
    store.dispatch({ type: 'UPDATE_PROJECTS' });
  }

  render() {
    var projectCards = this.props.projects.map((project) => { return <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} />; });
    return (
      <div>
        <h1>Home page</h1>
        <button onClick={this.handleClick.bind(this)}>Add Project</button>
        {projectCards}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    projects: store.projectsState.projects
  };
}

export default connect(mapStateToProps)(Home);
