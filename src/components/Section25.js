import React from 'react';
import styled from 'styled-components';
import useScrollFadeInImgOnce from '../hooks/useScrollFadeInImgOnce';

import '../index.scss';

import section25 from '../images/section25.jpg';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 0;
  background-color:#00c17c;
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

const Section25 = () => {
  const animatedItem = { 
    0: useScrollFadeInImgOnce('up', 0.8, 0.4),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section25}
            width='100%'
            height='auto'
            alt='Solid - Reliable Green
            '
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section25;