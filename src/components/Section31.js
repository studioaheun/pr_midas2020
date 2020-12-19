import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section31 from '../images/section31.jpg';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 13rem 0;
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
  margin-top:2rem;


  `,

  Para: styled.p` 
  width:50%;
  margin:0 auto;
  margin-top:9rem;
  font-size:1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:400;
  line-height:160%;
  color:#fff;
  text-align:center;
  word-break:keep-all;

  @media (max-width: 768px) {
    font-size:1.4rem;
  }
  `,

}

const Section31 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0.2),

  }; 

  return (
  <S.Wrapper>
  <S.Imgdiv >
    <img         
            src = {section31}
            width='100%'
            height='auto'
            alt='FRAME
            ICONOGRAPHY
            PATTERN
            '
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section31;