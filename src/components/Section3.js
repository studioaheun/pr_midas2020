import React from 'react';
import styled from 'styled-components';
import useScrollFadeInImgLoop from '../hooks/useScrollFadeInImg2';

import section3Left from '../images/section3_left.jpg';
import section3Right from '../images/section3_right.jpg';

import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 200px 0;
  margin-top:200px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    padding:5rem 0;
    margin-top:0;
  }
  `,
  Imgdown: styled.div`
  width:50%;
  height:auto;
  `,

  Imgup: styled.div`
  width:50%;
  height:auto;
  `,
    

}

const Section3 = () => {
  const animatedItem = { 
    0: useScrollFadeInImgLoop('down', 1.2, 0.6),
    1: useScrollFadeInImgLoop('up', 1, 0.8),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdown {...animatedItem[0]} >
    <img         
            src = {section3Left}
            width='100%'
            height='auto'
            alt='노트북을 사용하며 오른쪽을 보고 있는 여성 이미지'
          />
    </S.Imgdown>
    <S.Imgup {...animatedItem[1]}>
    <img         
            src = {section3Right}
            width='100%'
            height='auto'
            alt='노트북을 사용하며 왼쪽을 보고 있는 남성 이미지'
          />
    </S.Imgup>
  </S.Wrapper>
  );
}

export default Section3;