import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import section5Left from '../images/section5_left.png';
import section5Right from '../images/section5_right.png';

import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:15rem;
  margin-bottom:15rem;
  @media (max-width: 768px) {
    margin-top:5rem;
    margin-bottom:5rem;
  }
  `,
  Imgdown: styled.div`
  width:50%;
  height:100%;
  img {
  }
  `,

  Imgup: styled.div`
  width:50%;
  height:100%;
  img {
  }

  `,
    

}

const Section5 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('down', 1, 0.6),
    1: useScrollFadeIn('up', 1, 0.6),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdown {...animatedItem[0]} >
    <img         
            src = {section5Left}
            width='100%'
            height='auto'
            alt='오른쪽을 보고 있는 여성 이미지입니다.'
          />
    </S.Imgdown>
    <S.Imgup {...animatedItem[1]}>
    <img         
            src = {section5Right}
            width='100%'
            height='auto'
            alt='왼쪽을 보고 있는 남성 이미지입니다.'
          />
    </S.Imgup>
  </S.Wrapper>
  );
}

export default Section5;