import {
  START_PLURAL_JOBS_FETCH, 
  PLURAL_JOBS_FETCH_SUCCESS,
  PLURAL_JOBS_FETCH_FAILURE
} from '../actions/actionTypes';

// define initial state of user
const initialState = {
  data: null,
  loading: false,
  error: null
}
 

// update store based on type and payload and return the state
 export default function common(state = initialState, action) {
   switch (action.type) {
     case START_PLURAL_JOBS_FETCH:
       return{
         ...state, 
         loading: true
       }
    case PLURAL_JOBS_FETCH_SUCCESS:
      const {data} = action.payload;
      return {
        ...state,
        data,
        loading: false
      }
    case PLURAL_JOBS_FETCH_FAILURE:
      const {error} = action.payload;
      return {
        ...state, 
        error
      }
      default:
        return state
  }
 }