import {
    START_SINGLE_JOB_FETCH,
    SINGLE_JOB_FETCH_SUCCESS, 
    SINGLE_JOB_FETCH_FAILURE, 
    VIEW_SINGLE_JOB, 
    VIEW_ALL_JOBS
} from '../actions/actionTypes';

// define initial state of user
const initialState = {
    data: null,
    loading: false,
    error: null,
    view: false,
    view_id: null
  }


  // update store based on type and payload and return the state
export default function common(state = initialState, action) {
    switch (action.type) {
      case START_SINGLE_JOB_FETCH:
        return {
          ...state,
          loading: true
        }
      case SINGLE_JOB_FETCH_SUCCESS:
        const {data} = action.payload;
        return {
          ...state,
          data,
          loading: false
        }
      case SINGLE_JOB_FETCH_FAILURE:
        const { error } = action.payload;
        return {
          ...state,
          error
        }
      case VIEW_SINGLE_JOB:
        const { id } = action.payload;
        return {
          ...state,
          view: true,
          view_id: id
        }
      case VIEW_ALL_JOBS:
        return {
          ...state,
          view: false,
          view_id: null
        }
      default:
        return state
    }
  }
