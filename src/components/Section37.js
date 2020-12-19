import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section37 from '../images/section37.jpg';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 5rem 0;
  background-color:#fff;
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

const Section37 = () => {


  return (
  <S.Wrapper>
  <S.Imgdiv>
    <img         
            src = {section37}
            width='100%'
            height='auto'
            alt='새로운 BI를 활용한 모바일 웹사이트 이미지 예시입니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section37;