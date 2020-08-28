import React, { Component } from 'react';
import {connect} from 'react-redux';

import { searchJob, fetchJobs } from '../actions/searchActions';

export class Filter extends Component {
    render() {
        return (
            <div className="catagory_area">
                <div className='container'>
                    <div className="row cat_search">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="single_input">
                                            <input type="text" placeholder="Search keyword" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="single_input">
                                            <input type="text" placeholder="Location" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="single_input">
                                            <input type='checkbox' name='fulltime' placeholder='Fulltime' value='false' style={{width: 15}} />
                                            <span style={{fontSize: 2 +'em'}}> Fulltime</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12'>
                                        <div className="job_btn">
                                            <button  className="boxed-btn3 w-100" >Find Job</button>
                                        </div>
                                    </div>
                    </div>       
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   text: state.jobs.text
})

export default connect(
    mapStateToProps, { searchJob, fetchJobs}
) (Filter);
