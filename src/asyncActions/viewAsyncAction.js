import {fetchSingleJob, singleJobFailure,singleJobSuccess} from '../actions/viewActions';

// get user list
export const pullOneJob = (id=0) => async dispatch => {
    dispatch(fetchSingleJob());
    try {
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`);
      const data = await res.json();
      dispatch(singleJobSuccess(data));
    } catch (err) {
      dispatch(singleJobFailure(err.message));
    }
  }