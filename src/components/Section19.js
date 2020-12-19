import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';
import section19title from '../images/section19title.png';

import section19_1 from '../images/section19_1.jpg';
import section19_2 from '../images/section19_2.jpg';
import section19_3 from '../images/section19_3.jpg';
import section19_4 from '../images/section19_4.jpg';
import section19_5 from '../images/section19_5.jpg';
import section19mob from '../images/section19mob.jpg';


import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 120px 0;
  background-color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  @media (max-width: 768px) {
    padding:6rem 0;
  }
  `,

  Imgdiv: styled.div`
  width:100%;
  margin-top:2rem;
  text-align:center;
  overflow:hidden;

  `,
  Viddiv: styled.div`
  width:100%;
  height:auto;
  text-align:center;
  @media (max-width: 1199px) {
    display:none;
  }
  `,
  Mobdiv: styled.div`
  width:100%;
  height:auto;
  text-align:center;
  display:none;
  img {
    width:100%;
    object-fit: cover;
  }
  @media (max-width: 1199px) {
    display:block;
  }
  `,

  Imgtitle: styled.div`
  width:88%;
  margin:0 auto;

  margin-top:1rem;
  margin-bottom:3.5rem;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1626px;
    margin:0 auto;
    
  }`,

}

const Section19 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),
    1: useScrollFadeIn('up', 0.8, 0),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
      <S.Imgtitle>
      <img         
            src = {section19title}
            width='100%'
            height='auto'
            alt='Brand Image Keywords'
          />
      </S.Imgtitle>

    </S.Imgdiv>
    <S.Viddiv>
      <div className = {'flow-line'}>
        <img         
              src = {section19_1}
              alt='선명함 신뢰 자상함 긍정 정확한 행복'
            />
          <img         
              src = {section19_1}
              alt='선명함 신뢰 자상함 긍정 정확한 행복'
            />
      </div>
      <div className = {'reverse-line'}>
        <img         
              src = {section19_2}
              alt='유능한 편리함 친절한 공평함 따뜻함 혁신'
            />
          <img         
              src = {section19_2}
              alt='유능한 편리함 친절한 공평함 따뜻함 혁신'
            />
      </div>
      <div className = {'flow-line'}>
        <img         
              src = {section19_3}
              alt='명쾌함 공정함 배려심 고마움 재밌는 반듯함'
            />
          <img         
              src = {section19_3}
              alt='명쾌함 공정함 배려심 고마움 재밌는 반듯함'
            />
      </div>
      <div className = {'reverse-line'}>
        <img         
              src = {section19_4}
              alt='매력적인 성장 포근함 흐뭇함 가치 착한 '
            />
          <img         
              src = {section19_4}
              alt='매력적인 성장 포근함 흐뭇함 가치 착한'
            />
      </div>
      <div className = {'flow-line'}>
        <img         
              src = {section19_5}
              alt='전문가 호감가는 빠른 분명함 맞춤 역량'
            />
          <img         
              src = {section19_5}
              alt='전문가 호감가는 빠른 분명함 맞춤 역량'
            />
      </div>
    </S.Viddiv>
    <S.Mobdiv>
        <img         
              src = {section19mob}
              alt='선명함 신뢰 자상함 긍정 정확한 행복 유능한 편리함 친절한 공평함 따뜻함 혁신
               명쾌함 공정함 배려심 고마움 재밌는 반듯함 매력적인 성장 포근함 흐뭇함 가치 착한
               전문가 호감가는 빠른 분명함 맞춤 역량' 
            />
    </S.Mobdiv>
  </S.Wrapper>
  );
}

export default Section19;