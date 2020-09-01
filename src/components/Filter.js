import React, { Component } from 'react';
import {connect} from 'react-redux';
import { pullAllJobs } from '../asyncActions/searchAsyncAction';

export class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
          location: "",
          description: "",
          fulltime: "false"
        }
      }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value; 
        this.setState({[nam]: val});
    }

    render() {
        const {location, description, fulltime } = this.state
        const {pullAllJobs } = this.props
        return (
            <div className="row cat_search">
            <div className="col-lg-3 col-md-4">
                <div className="single_input">
                    <input type="text" placeholder="Search keyword" name='description' onChange={this.myChangeHandler} />
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="single_input">
                    <input type="text" placeholder="Location" name="location" onChange={this.myChangeHandler} />
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="single_input">
                    <input type="checkbox" style={{width: 15}} name="fulltime" placeholder="Fulltime" onChange={this.myChangeHandler} /> <span style={{fontSize: 2 +"em"}} >Fulltime</span>
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
