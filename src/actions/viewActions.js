import { 
     START_SINGLE_JOB_FETCH, 
     SINGLE_JOB_FETCH_SUCCESS,
     SINGLE_JOB_FETCH_FAILURE,
     VIEW_SINGLE_JOB
   } from './actionTypes';

   // action creator for START SINGLE JOBS FETCH
    export const fetchSingleJob = () =>({
    type: START_SINGLE_JOB_FETCH
  })

// action creator for VIEW ONE JOB
  export const viewOneJob = id => {
    return {
      type: VIEW_SINGLE_JOB,
      payload: {id}
    }
  } 

 // action creator for SINGLE JOB FETCH SUCCESS
  export const singleJobSuccess = data => {
    return {
      type: SINGLE_JOB_FETCH_SUCCESS,
      payload: {data}
    }
  } 

  
  // action creator for SINGLE JOB FETCH FAILURE
  export const singleJobFailure = error => {
    return{
      type: SINGLE_JOB_FETCH_FAILURE,
      payload: {error}
  }
}