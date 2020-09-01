import React, { Component } from 'react';
import {connect} from 'react-redux';
import { pullAllJobs } from '../asyncActions/searchAsyncAction';
import { pullOneJob } from '../asyncActions/viewAsyncAction';

export class Filter extends Component {
    onChange = e => {
        pullAllJobs(e.target.value)
    }
    render() {
        const {location, description, fulltime } = this.props
        const {pullAllJobs } = this.props
        return (
            <div className="row cat_search">
            <div className="col-lg-3 col-md-4">
                <div className="single_input">
                    <input type="text" placeholder="Search keyword" value={description} name='description' onChange={this.onChange} />
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="single_input">
                    <input type="text" placeholder="Location" value={location} name="location" onChange={this.onChange} />
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="single_input">
                    <input type="checkbox" style={{width: 15}} name="fulltime" value={fulltime}  placeholder="Fulltime" onChange={this.onChange} /> <span style={{fontSize: 2 +"em"}} >Fulltime</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-12">
                <div className="job_btn">
                    <button className="boxed-btn3" onClick={(e) => pullAllJobs(0, location, fulltime, description)}>Find Job</button>
                </div>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps ={
    pullAllJobs
}

export default connect(
    null, mapDispatchToProps
) (Filter);
