import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { getTopProjects } from '../resources/project-resource';
import ProjectCard from '../components/ProjectCard';

class TopProjectsContainer extends Component {
  componentWillMount() {
    getTopProjects().then(function (data) {
      store.dispatch({ type: 'UPDATE_PROJECTS', projects: data });
    });
  }

  render() {
    var projects = this.props.projects.map((project) => {
      return <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} />;
    });

    return (
      <div>
        {projects}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    projects: store.projectsState.projects
  };
}

export default connect(mapStateToProps)(TopProjectsContainer);
