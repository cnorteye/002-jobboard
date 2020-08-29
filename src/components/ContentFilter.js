import React, { Component } from 'react';
import Content from './Content';
import Filter from './Filter';
 
class ContentFilter extends Component {
  render() {
    return (
      <div>
        <div className="catagory_area">
        <div className="container">
          <Filter />
        </div>
      </div>
      
      <div className="job_listing_area plus_padding">
        <div className="container">
            <div className="row">
              <Content />
            </div>
        </div>
      </div>
      </div>
    );
  }
}
 
export default ContentFilter