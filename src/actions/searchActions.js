import { START_PLURAL_JOBS_FETCH,
         PLURAL_JOBS_FETCH_FAILURE,
          PLURAL_JOBS_FETCH_SUCCESS, 
          VIEW_ALL_JOBS, 
          SET_DESCRIPTION,
          SET_FULLTIME, 
          SET_LOCATION
        } from './actionTypes';



 export const filterLocation = location => dispatch => {
  dispatch ({
    type: SET_LOCATION,
      payload: location
          })
      }
      
export const filterDescription = description => dispatch => {
dispatch({
type: SET_DESCRIPTION,
  payload: description
          })
      }
      
export const filterCheckbox = fulltime => {
 return {
  type: SET_FULLTIME,
  payload: fulltime
         }
      }

// action creator for START PLURAL JOBS FETCH
export const fetchPluralJobs = () =>({
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

