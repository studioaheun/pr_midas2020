import React from 'react';
import styled from 'styled-components';
import useScrollFadeInImgOnce from '../hooks/useScrollFadeInImgOnce';

import '../index.scss';

import section26 from '../images/section26.jpg';



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

const Section26 = () => {
  const animatedItem = { 
    0: useScrollFadeInImgOnce('up', 0.8, 0.3),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section26}
            width='100%'
            height='auto'
            alt='Solid - Expert Navy'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section26;