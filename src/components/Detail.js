import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pullOneJob } from '../asyncActions/viewAsyncAction';
import { viewAllJobs } from "../actions/searchActions";
import JobDetail from './JobDetail';
 
class Detail extends Component { 
  
  
  componentDidMount() {
    this.props.pullOneJob(this.props.id);
  }
  
  
  render() {
    
   const {oneJobObj} = this.props
   let displayView;
    if (oneJobObj.data) {
      displayView = <JobDetail job={oneJobObj.data} pic="3" />
    }
    
    return (
      <div>
        <div className="row col-md-12">
          <button style={{marginTop: "10px", marginLeft:"40px"}} className="boxed-btn3 w-100" onClick={this.props.viewAllJobs}>Go Back To Search</button>
        </div>
         { displayView }
      </div>
     
      
    );
  }
}
 
const mapDispatchToProps = {
  pullOneJob,
  viewAllJobs
}

const mapStateToProps = (state) => {
  return {
    oneJobObj: state.job,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);