import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section38 from '../images/section38.png';
import section38mob from '../images/section38mob.jpg';

import sectionmv38 from '../vid/sectionmv38.mp4';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding-top:8rem;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;

  `,

  Imgdiv: styled.div`
  width:88%;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1480px;
    margin:0 auto;
  }`
  ,
  Viddiv: styled.div`
  width:100%;
  background-color:black;
  padding:13rem 0;
  text-align:center;
  overflow:hidden;
  img{
    display:none;
  }
  @media (max-width: 1199px) {
    padding:0;
    video {
      display:none; 
    }
    img{
      padding:6rem 0;
      width:100%;
      display:block;
    }
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


}

const Section38 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
  <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section38}
            width='100%'
            height='auto'
            alt='Application - BI를 활용한 포탈사이트 광고 예시입니다.'
          />

  </S.Imgdiv>
  <S.Viddiv>
    <video className='section38-vid' width= '100%' height='auto' autoPlay loop muted>
      <source src={sectionmv38} type='video/mp4' />
    </video>
    <img         
            src = {section38mob}
            width='100%'
            height='auto'
            alt='JOBPLEX 리뉴얼된 브랜드 이미지 롤링 배너입니다.'
          />
  </S.Viddiv>
  </S.Wrapper>
  );
}

export default Section38;