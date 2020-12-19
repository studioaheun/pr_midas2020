import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section40 from '../images/section40.jpg';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 0;
  background-color:#d3d3d5;
  display: flex;
  margin-bottom:-10px;

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

const Section40 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0.2),

  }; 

  return (
  <S.Wrapper>
  <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section40}
            width='100%'
            height='auto'
            alt='새로운 BI를 활용한 JOBFLEX 모바일 SNS 이미지 예시입니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section40;