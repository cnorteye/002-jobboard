import { START_PLURAL_JOBS_FETCH,
         PLURAL_JOBS_FETCH_FAILURE,
          PLURAL_JOBS_FETCH_SUCCESS, 
          VIEW_ALL_JOBS, 
        } from './actionTypes';

// action creator for START PLURAL JOBS FETCH
export const fetchPluralJobs =() =>({
  type: START_PLURAL_JOBS_FETCH
})

// action creator for VIEW ALL JOBS
export const viewAllJobs = () => ({
  type: VIEW_ALL_JOBS
})

// action creator for PLURAL JOBS FETCH SUCCESS
export const pluralJobsSuccess = data => {
  return {
    type: PLURAL_JOBS_FETCH_SUCCESS, 
    payload: {data}
  }
}

// action creator for PLURAL JOBS FETCH FAILURE
export const pluralJobsFailure = error => {
  return {
    type: PLURAL_JOBS_FETCH_FAILURE,
    payload: {error}
  }
}

