import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import sectionmv29 from '../vid/sectionmv29.mp4';
import section29mob from '../images/section29_mobile.png';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding-top:13rem;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  video {
    padding:0; 
  }
  img{
    display:none;
  }
  @media (max-width: 1199px) {
    padding-top:6rem;
    padding-bottom:0;
    video {
      display:none; 
    }
    img{
      width:88%;
      display:block;
    }
  }
  `,

  Imgdiv: styled.div`
  width:88%;
  text-align:center;
  overflow:hidden;
  margin-bottom:6rem;
  img {
    max-width:1786px;
  }
  `,
  Imgtitle: styled.h3`
  font-weight:600;
  font-size:2rem;
  color:#fff;
  margin: 2.5rem 0;
  text-align:center;
  overflow:hidden;
  `,
  Paradiv: styled.div`
  width:100%;
  margin-top:12rem;

  `,


}

const Section29 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
        <img         
            src = {section29mob}
            width='100%'
            height='auto'
            alt='Jobflex logo slide animation'
          />
    <video className='section29-vid' width= '100%' height='auto' autoPlay loop muted>
      <source src={sectionmv29} type='video/mp4' />
    </video>
  </S.Wrapper>
  );
}

export default Section29;