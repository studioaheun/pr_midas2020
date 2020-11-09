import React from 'react';
import '../index.scss';


const StickyHeader = () => {
    return (
      <div className ={'sticky-header'}>
        <h1>logo here</h1>
        <div className= {'gnb-btn'}>
          <a href= "#">credit</a>
          <a href="#">play vid.</a>
          <a href="#">download</a>
        </div>
      </div>
    );
  }

export default StickyHeader;