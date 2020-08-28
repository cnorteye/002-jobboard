import { SEARCH_JOB, FETCH_JOBS, FETCH_JOB, LOADING } from './actionTypes';
import axios from 'axios';

export const searchJob = text => dispatch => {
  dispatch({
    type: SEARCH_JOB,
    payload: text
  });
};

export const fetchJobs = (description, location, fulltime) => dispatch => {
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=${fulltime}&location=${location}`)
    .then(response =>
      dispatch({
        type: FETCH_JOBS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchJob = id => dispatch => {
  axios
    .get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?`)
    .then(response =>
      dispatch({
        type: FETCH_JOB,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};