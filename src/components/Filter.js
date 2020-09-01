import React, { Component } from 'react';
import {connect} from 'react-redux';
import { pullAllJobs } from '../asyncActions/searchAsyncAction';

export class Filter extends Component {
    onChange = e => {
        this.props.pullAllJobs(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault ();
        this.props.pullAllJobs(this.props.location, this.props.description, this.props.fulltime)
    }
    render() {
        const {location, description, fulltime} = this.props
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
                    <button className="boxed-btn3" onClick={this.onSubmit}>Find Job</button>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    location: state.jobs.location,
    fulltime: state.jobs.fulltime, 
    description: state.jobs.fulltime
})

export default connect(mapStateToProps, {pullAllJobs}
) (Filter);
