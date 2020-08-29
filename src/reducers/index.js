import { combineReducers } from 'redux';
import jobs from './searchReducer';
import job from './viewReducer';

// to combine all reducers together
const appReducer = combineReducers({
  jobs,
  job
});
 
export default appReducer;