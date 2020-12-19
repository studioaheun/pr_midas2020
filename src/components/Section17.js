import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import section17Left from '../images/section17_left.png';
import section17Right from '../images/section17_right.png';
import BgImg from '../images/background_texture.png';


import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 0;
  background-image:url(${BgImg});
  overflow:hidden;
  
  `,
  Imgdown: styled.div`
  width:50%;
  height:100%;
  float:left;

  `,

  Imgup: styled.div`
  width:50%;
  height:100%;
  float:right;

  `,
  
  Imgtitle: styled.h3`
  position:absolute;
  margin-top:30rem;
  width:360px;
  left:calc(50vw - 180px);
  font-weight:300;
  font-size:2rem;
  color:#00c17c;
  text-align:center;
  @media (min-width:769px) and (max-width: 1200px) {
    margin-top:25rem;
  }
  @media (min-width:421px) and (max-width: 768px) {
    margin-top:20rem;
  }
  @media (max-width: 420px) {
    margin-top:15rem;
  }
  `
  ,
    
}

const Section17 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1.4, 0),
    1: useScrollFadeIn('down', 1, 1),
    2: useScrollFadeIn('up', 0.7, 1.3),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdown {...animatedItem[0]} >
      <img         
              src = {section17Left}
              width='100%'
              height='auto'
              alt='오른쪽을 바라보는 여성 이미지입니다.'
            />
    </S.Imgdown>
    <S.Imgup {...animatedItem[1]}>
      <img         
              src = {section17Right}
              width='100%'
              height='auto'
              alt='왼쪽을 바라보는 남성 이미지입니다.'
            />
    </S.Imgup>
    <div style={{position:'relative', width:'100%', height:'3rem'}}>
      <S.Imgtitle {...animatedItem[2]}>
        What is your <br/>
        hidden spectrum?
      </S.Imgtitle >
    </div>
  </S.Wrapper>
  );
}

export default Section17;