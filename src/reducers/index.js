import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';

var reducers = combineReducers({
  projectsState: projectsReducer
});

export default reducers;
