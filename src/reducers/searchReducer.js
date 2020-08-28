import {
    SEARCH_JOB,
    FETCH_JOBS,
    FETCH_JOB,
    LOADING
  } from '../actions/types';
  
  const initialState = {
    text: '',
    jobs: [],
    loading: false,
    job: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_JOB:
        return {
          ...state,
          text: action.payload,
          loading: false
        };
      case FETCH_JOBS:
        return {
          ...state,
          jobs: action.payload,
          loading: false
        };
      case FETCH_JOB:
        return {
          ...state,
          job: action.payload,
          loading: false
        };
      case LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }