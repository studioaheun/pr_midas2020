import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section34 from '../images/section34.jpg';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 10rem 0;
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
    max-width:1416px;
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

const Section34 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0.2),

  }; 

  return (
  <S.Wrapper>
  <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section34}
            width='100%'
            height='auto'
            alt='App Icon 앱 아이콘 디자인 이미지입니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section34;