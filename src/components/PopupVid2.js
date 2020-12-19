import React, {Component} from "react";
import SvgMv2 from './svgprops/SvgMv2.js';
import Popup from './Popup.js';
import '../index.scss';

export default class PopupVid extends Component {
    state = {
        seen:false
    };

    togglePop = () => {
      this.setState({
        seen:!this.state.seen
      });
    };

    render(){
        return(
        <div className="gnb-btn" onClick={this.togglePop}>
            <button className= "video-btn">
              <SvgMv2/>
            </button>
            {this.state.seen ? <Popup toggle={this.togglePop} /> :null}
        </div>
        )
    }

}

