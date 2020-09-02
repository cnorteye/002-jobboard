import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  filterLocation, 
  filterDescription, 
  filterCheckbox,
} from '../actions/searchActions';

import {pullAllJobs} from "../asyncActions/searchAsyncAction"

export class Filter extends Component {
  onChangeLocation = e => {
    this.props.filterLocation(e.target.value)
  };

  onChangeDescription = e => {
    this.props.filterDescription(e.target.value)
  };

  onChangeFulltime = e => {
    this.props.filterCheckbox(e.target.value)
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.pullAllJobs(0, this.props.location, this.props.description, this.props.fulltime);
  }
    render() {
        return (
        <form id="searchForm" onSubmit={this.onSubmit}>
          <div className="row cat_search">
          <div className="col-lg-3 col-md-4">
              <div className="single_input">
                  <input
                   type="text" 
                   placeholder="Search keyword" 
                   onChange={this.onChangeDescription} />
              </div>
          </div>
          <div className="col-lg-3 col-md-4">
              <div className="single_input">
                  <input 
                  type="text" 
                  placeholder="Location" 
                  name="location" 
                  onChange={this.onChangeLocation} />
              </div>
          </div>
          <div className="col-lg-3 col-md-4">
              <div className="single_input">
                  <input 
                  type="checkbox" 
                  style={{width: 15}} 
                  name="fulltime" 
                  placeholder="Fulltime"  
                  onChange={this.onChangeFulltime}  />
                  <span style={{fontSize: 2 +"em"}} >Fulltime</span>
              </div>
          </div>
              <div className="col-lg-3 col-md-12">
                  <div className="job_btn">
                      <button 
                      className="boxed-btn3" 
                      >Find Job</button>
                  </div>
              </div>
      </div>
      </form>
        )
    }
}

const mapStateToProps = state => ({
  location: state.jobs.location,
  description: state.jobs.description,
  fulltime: state.jobs.fulltime

});

export default connect(mapStateToProps,{
  filterDescription, filterLocation, filterCheckbox, pullAllJobs,
}) (Filter);
