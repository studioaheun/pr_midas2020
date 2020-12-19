import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section35 from '../images/section35.jpg';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 0;
  background-color:#00c17c;
  margin-bottom:-10px;

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

const Section35 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0.2),

  }; 

  return (
  <S.Wrapper>
  <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section35}
            width='100%'
            height='auto'
            alt='앱 아이콘이 적용된 핸드폰 화면 예시 이미지입니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section35;