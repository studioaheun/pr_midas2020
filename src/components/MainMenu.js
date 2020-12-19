import React, { useLayoutEffect } from 'react';
import {Link} from 'react-router-dom'
import '../index.scss';
import PopupVid from './PopupVid.js';
import SvgDownload from './svgprops/SvgDownload.js';
import classnames from "classnames";


class MainMenu extends React.Component {


  render(){
    return(
      <div className ={classnames("main-header")}>
      <h1>
        <Link to = "/">
          JOBFLEX DESIGN SYSTEM
        </Link>
      </h1>
      <ul className= {'gnb-btn-container'}>
        <li className="gnb-btn"><PopupVid/></li>
        <li className="gnb-btn">
          <a href = "http://midasdesign.net/#/DownloadGuide">
            <div className = {'down-btn'}><SvgDownload/></div>
          </a>
        </li>
      </ul>  
    </div>
    );
  }
}


export default MainMenu;