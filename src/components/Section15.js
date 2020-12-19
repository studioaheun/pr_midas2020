import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section15 from '../images/section15.jpg';
import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding:0;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;

  `,

  Imgdiv: styled.div`
  width:100%;
  text-align:center;

  `,

}

const Section15 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section15}
            width='100%'
            height='auto'
            alt='Main Points
            각자의 본질 (역량 / 매력)을 찾게 도와주는 플랫폼
            서로(기업 / 구직자)의 장점을 더 잘 볼 수 있게 도와주는 플랫폼
            구직자의 역량이 온전히 발현될 수 있는 기업을 매칭해 주는 플랫폼
            '
          />
    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section15;