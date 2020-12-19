import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImgOnce';

import '../index.scss';

import section7 from '../images/section7.png';
import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 120px 0;
  background-image:url(${BgImg});
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
  margin-top:2rem;
  text-align:center;
  max-width:1920px;
  img {
    margin:0 auto;
    max-width:1626px;
  }
  `,

}

const Section7 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section7}
            width='100%'
            height='auto'
            alt='Background - Inform Identify Match Simplify Customize'
          />
    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section7;