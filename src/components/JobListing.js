// this is the list of jobs on the home page

import React, { Component } from 'react';
import {viewOneJob} from "../actions/viewActions"
import { connect } from 'react-redux';

 
class JobBoard extends Component {
  render() {
    const {viewOneJob} = this.props
    return (
    <div className="col-lg-12 col-md-12">
      <div className="single_jobs white-bg d-flex justify-content-between">
          <div className="jobs_left d-flex align-items-center">
              <div className="thumb">
                  <img src={"img/svg_icon/"+(this.props.pic%5+1)+".svg"} alt="" />
              </div>
              <div className="jobs_conetent">
                  <a href={this.props.job.url} target="_blank"><h4>{this.props.job.title}</h4></a>
                  <div className="links_locat d-flex align-items-center">
                      <div className="location">
                          <p> <i className="fa fa-map-marker"></i> {this.props.job.location}</p>
                      </div>
                      <div className="location">
                          <p> <i className="fa fa-clock-o"></i> {this.props.job.type}</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="jobs_right">
              <div className="apply_now">
                  <a className="heart_mark" href="#"> <i className="fa fa-heart"></i> </a>
                  <button className="boxed-btn3" onClick={() => viewOneJob(this.props.job.id)}>Apply Now</button>
              </div>
              <div className="date">
                  <p>Date line: {this.props.job.created_at}</p>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

 
const mapDispatchToProps = {
  viewOneJob
}


export default connect(null, mapDispatchToProps)(JobBoard);

