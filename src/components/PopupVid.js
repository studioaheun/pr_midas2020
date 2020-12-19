import React, {Component} from "react";
import SvgMv from './svgprops/SvgMv.js';
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
              <SvgMv/>
            </button>
            {this.state.seen ? <Popup toggle={this.togglePop} /> :null}
        </div>
        )
    }

}

