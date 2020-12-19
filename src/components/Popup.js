import React, {Component} from 'react';
import '../index.scss';
import SvgClose from './svgprops/SvgClose.js';

//    https://codepen.io/bastianalbers/pen/PWBYvz

export default class Popup extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return(
    <div className ="popup">
      <div className ="popup-content">
        <button onClick={this.props.closePop}><SvgClose/></button>
        <iframe src="https://player.vimeo.com/video/491080911?autoplay=1" frameBorder="0" allow="autoplay;"></iframe>
      </div>
    </div>
    );
  }
}