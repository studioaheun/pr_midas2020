import React from 'react';
import {Link} from 'react-router-dom'
import '../index.scss';
import PopupVid2 from './PopupVid2.js';
import SvgDownload2 from './svgprops/SvgDownload2.js';
import classnames from "classnames";


class Menu extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      prevScrollpos:window.pageYOffset,
      visible:true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);  
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  } 
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render(){
    return(
      <div id = "myNav" className ={classnames({"sticky-header-hidden": !this.state.visible})}>
        <div style ={{height:'80px', width:'100%', backgroundColor:'black',}}>
        <h1>
          <Link to = "/">
            JOBFLEX DESIGN SYSTEM
          </Link>
        </h1>
        <ul className= {'gnb-btn-container'}>
          <li className="gnb-btn"><PopupVid2/></li>
          <li className="gnb-btn">
          <a href = "http://midasdesign.net/#/DownloadGuide">
              <div className = {'down-btn'}><SvgDownload2/></div>
            </a>
          </li>
        </ul> 
        </div>
    </div>
    );
  }
}


export default Menu;