import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section23 from '../images/section23.jpg';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 12rem 0;
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
  width:88%;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1626px;
    margin:0 auto;
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

const Section23 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section23}
            width='100%'
            height='auto'
            alt='BRAND LOGO - JOBFLEX 리뉴얼된 로고입니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section23;