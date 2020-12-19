import React from 'react';
import {Link} from 'react-router-dom'
import '../index.scss';
import PopupVid2 from './PopupVid2.js';
import SvgDownload2 from './svgprops/SvgDownload2.js';
import styled from 'styled-components';


class SubMenu extends React.Component {

  render(){
    return(
      <div className ={'sub-header'}>
      <h1>
        <a href = "http://midasdesign.net">
          JOBFLEX DESIGN SYSTEM
        </a>
      </h1>
      <ul className= {'gnb-btn-container'}>
        <li className="gnb-btn"><PopupVid2/></li>
        <li className="gnb-btn">
          <Link to = "/DownloadGuide">
            <div className = {'down-btn'}><SvgDownload2/></div>
          </Link>
        </li>
      </ul>  
    </div>
    );
  }
}


export default SubMenu;