import { combineReducers } from 'redux';
import terminalReducer from './slices/terminalSlice';
import projectReducer from './slices/projectSlice';

const rootReducer = combineReducers({
  terminal: terminalReducer,
  project: projectReducer,
});

export default rootReducer;