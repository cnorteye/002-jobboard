import React, { Component } from 'react';
import {connect} from 'react-redux';
import { pullAllJobs } from '../asyncActions/searchAsyncAction';

export class Filter extends Component {
    onChange = e => {
        this.props.pullAllJobs(e.target.value)
    }

    onClick = e => {
        e.preventDefault ();
        this.props.pullAllJobs(0, this.props.location, this.props.description, this.props.fulltime)
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
            
            <button className="boxed-btn3" type='submit' onClick={this.onClick}>Find Job</button>

        </div>
        )
    }
}

const mapStateToProps = state => ({
    location: state.jobs.location,
    fulltime: state.jobs.fulltime, 
    description: state.jobs.description
})

export default connect(mapStateToProps, {pullAllJobs}
) (Filter);
