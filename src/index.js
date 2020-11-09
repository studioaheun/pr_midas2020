import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StickyHeader from './componants/StickyHeader.js';
import StickyWrapper from './componants/StickyWrapper.js';


ReactDOM.render(
  <React.StrictMode>
    <div className={'sample-preloader'}></div>
    <div className={'sample-container'}>
      <StickyHeader/>
      <StickyWrapper/>
    </div> 

  </React.StrictMode>,
  document.getElementById('root')
);

