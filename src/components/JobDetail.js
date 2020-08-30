// this is the single job detial page

import React, { Component } from 'react';
import HTMLParser from 'html-parser';

 
class JobDetail extends Component {
  
  render() {
    
    return (
        <div className="job_details_area">
        <div className="container">
            <div className="row">
              
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src={"img/svg_icon/"+(this.props.pic)+".svg"} alt="" />
                                </div>
                                <div className="jobs_conetent">
                                    <a href="#"><h4>{this.props.job.title}</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i>{this.props.job.location}</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> {this.props.job.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                         
                          { <div dangerouslySetInnerHTML={{ __html: HTMLParser.sanitize(this.props.job.description) }} /> }
                        </div>
                    </div>
                  <div className="col-md-12">
                      <div className="submit_btn">
                          <a href={this.props.job.company_url} target="_blank" className="boxed-btn3 w-100" type="submit">Apply Now</a>
                      </div>
                  </div>
                    </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="summery_header">
                            <h3>Job Summary</h3>
                        </div>
                        <div className="job_content">
                            <ul>
                                <li>Published on: <span>{this.props.job.created_at}</span></li>
                                <li>Salary: <span>50k - 120k/y</span></li>
                                <li>Location: <span>{this.props.job.location}</span></li>
                                <li>Job Nature: <span> {this.props.job.type}</span></li>
                            </ul>
                          <div className="single_wrap">
                          { <div dangerouslySetInnerHTML={{ __html: HTMLParser.sanitize(this.props.job.how_to_apply) }} /> }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default JobDetail;