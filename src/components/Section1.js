import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import useScrollFadeInBK from '../hooks/useScrollFadeInBK';

import GradientParticle from './GradientParticle.js';
import SvgArrow from './svgprops/SvgArrow.js';

import imgSample from '../images/sample1.png';

const Section1 = () => {
  const animatedItem = { 0: useScrollFadeInBK('down', 0.6, 1),
                         1: useScrollFadeIn('up', 1, 1.5),
                         2: useScrollFadeIn('up', 1.2, 2.5),
                        }


  return (
    
    <div className ={'Section1'}>
      <div className = {'left-grad-container'} >
        <div className = {'effect-bk-div'} {...animatedItem[0]}></div>
        <div className = {'img-container'}>  
          <img 
                src = {imgSample}

                alt='그라디언트 효과 위에 오버레이된 남성 이미지'
              />      
        </div>
          <GradientParticle/>
      </div>
      <div className = {'right-container'}{...animatedItem[1]}>
      <div className = {'txt-gradient-container'}>
        <p>2020 BRAND STORY</p>
        <h4 className= {'txt-gradient'}>
        Discover <br/>
        Your Talents,<br/>
        Design Your<br/>
        Spectrum.
        </h4>
      </div>  
    </div>  
      <div className ={'arrowBtn'}{...animatedItem[2]}>      
            <SvgArrow />
      </div>
  </div>
  );
}


export default Section1;