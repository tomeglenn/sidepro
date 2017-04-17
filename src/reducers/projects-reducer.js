const initialState = {
  projects: []
};

const projectsReducer = function (state = initialState, action) {
  if (action.type === 'UPDATE_PROJECTS') {
    return {
      ...state,
      projects: [...state.projects, { id: state.projects.length + 1, title: 'Hello', description: 'World' }]
    };
  }
  return state;
}

export default projectsReducer;
