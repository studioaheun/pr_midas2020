import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section28 from '../images/section28.png';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 0;
  background-color:#221b4b;
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
  Imgtitle: styled.h3`
  font-weight:600;
  font-size:2rem;
  color:#fff;
  margin: 2.5rem 0;
  text-align:center;
  overflow:hidden;
  `,

}

const Section28 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0.3),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section28}
            width='100%'
            height='auto'
            alt='
            Poppins Regular
            Noto Sans CJK KR Medium
            Mont Heavy
            Sandoll Gothic Neo2 EB

            Discover Your Spectrum
            스펙을 넘어 스펙트럼을 봅니다
            '
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section28;