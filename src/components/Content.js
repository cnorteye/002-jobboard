import React, { Component } from 'react';
import JobBoard from './JobListing';
import { connect } from 'react-redux';
import { pullAllJobs} from '../asyncActions/searchAsyncAction';
import JobListing from './JobListing';


class Content extends Component {
  
  componentDidMount() {
    this.props.pullAllJobs();
  }
  
  
  render() {
    const {allJobsObj } = this.props
    return (
      <div className="col-lg-12">
                    <div className="job_lists m-0">
                        <div className="row">
                          {allJobsObj.data && allJobsObj.data.map((x, i) => 
                            <JobListing key={i} job={x} pic={i} />
                          )}
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pagination_wrap">
                                    <ul>
                                        <li><a href="#"> <i className="ti-angle-left"></i> </a></li>
                                        <li><a href="#"><span>01</span></a></li>
                                        <li><a href="#"><span>02</span></a></li>
                                        <li><a href="#"> <i className="ti-angle-right"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allJobsObj: state.jobs,
  }
}
 
const mapDispatchToProps = {
  pullAllJobs 
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);