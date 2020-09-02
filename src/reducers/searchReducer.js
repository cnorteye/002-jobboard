import {
  START_PLURAL_JOBS_FETCH, 
  PLURAL_JOBS_FETCH_SUCCESS,
  PLURAL_JOBS_FETCH_FAILURE,
  SET_LOCATION,
  SET_FULLTIME, 
  SET_DESCRIPTION
} from '../actions/actionTypes';

// define initial state of user
const initialState = {
  data: null,
  loading: false,
  error: null,
  location: '',
  description: '',
  fulltime:''
}
 

// update store based on type and payload and return the state
 export default function common(state = initialState, action) {
   switch (action.type) {
    case SET_LOCATION:
      return {
          ...state,
          location: action.payload,
      }
  case SET_DESCRIPTION:
      return {
          ...state,
          description: action.payload,
      }
  case SET_FULLTIME:
      return {
          ...state, 
          fulltime: action.payload
      }
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