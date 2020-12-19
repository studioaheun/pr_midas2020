import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section33title from '../images/section33_1.jpg';
import section33main from '../images/section33_2.jpg';
import section33mob from '../images/section33mob.jpg';

import sectionmv33 from '../vid/sectionmv33.mp4';


import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 5rem 0;
  background-color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;

  `,

  Imgdiv: styled.div`
  width:100%;
  text-align:center;
  overflow:hidden;
  
  `,
  Viddiv: styled.div`
  width:100%;
  text-align:center;
  overflow:hidden;
  video {
    padding:0; 
  }
  img{
    display:none;
  }
  @media (max-width: 1199px) {
    padding-bottom:0;
    video {
      display:none; 
    }
    img{
      width:100%;
      display:block;
    }
  }
  `
  ,
  Imgtitle: styled.h3`
  font-weight:600;
  font-size:2rem;
  color:#fff;
  margin: 2.5rem 0;
  text-align:center;
  overflow:hidden;
  `,


}

const Section33 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv>
      <img         
              src = {section33title}
              width='100%'
              height='auto'
              alt='Web'
            />

      </S.Imgdiv>
    <S.Viddiv>
      <video className='section33-vid' width= '100%' height='auto' autoPlay loop muted>
        <source src={sectionmv33} type='video/mp4' />
      </video>
      <img         
              src = {section33mob}
              width='100%'
              height='auto'
              alt='JOBFLEX 리뉴얼 웹 사이트 슬라이드 영상입니다.'
            />
    </S.Viddiv>
    <S.Imgdiv>
    <img         
            src = {section33main}
            width='100%'
            height='auto'
            alt='JOBFLEX 리뉴얼 웹 사이트 이미지입니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section33;