import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section21 from '../images/section21.png';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 13rem 0;
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
  text-align:center;
  overflow:hidden;
  img {
    max-width:1626px;
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

const Section21 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section21}
            width='100%'
            height='auto'
            alt='Design Goals and Objective
            사용자들에게 신뢰와 안정감을 주는 이미지
            신생브랜드로서 인지도 확보, 차별화된 메시지 전달
            다양한 고객사 브랜드와 조화롭게 공존할 수 있는 아이덴티티
            AI기술, 데이터, 기업용 솔루션을 포괄하고 확장성을 가지는 디자인
            다양한 채널, 다양한 브랜드를 포용하고 연계 및 확장이 쉬운 비주얼랭귀지 구축
            '
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section21;