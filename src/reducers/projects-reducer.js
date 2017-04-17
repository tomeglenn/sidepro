const initialState = {
  projects: []
};

const projectsReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PROJECTS':
      return { ...state, projects: action.projects };
      break;
  }
  
  return state;
}

export default projectsReducer;
