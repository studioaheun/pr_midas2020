import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section30 from '../images/section30.png';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding:12rem 0;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  video {
    max-width:1275px;
  }
  @media (max-width: 768px) {
    padding:6rem 0;
  }
  `,

  Imgdiv: styled.div`
  width:88%;
  text-align:center;
  overflow:hidden;
  margin-bottom:6rem;
  img {
    max-width:1786px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
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

const Section30 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
  <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section30}
            width='100%'
            height='auto'
            alt='USAGE OF 
            SPECTRUM GRAPHIC MOTIF 
            잡플렉스 브랜드의 스펙트럼 그래픽 모티프 활용 예시입니다. 
            다채로운 색상으로 이루어진 스펙트럼 모티프는
            알파벳 F의 조형적 특징을 바탕으로 한 잡플렉스만의 특징을 지니고 있습니다. 
            인재들이 가진 다양한 역량을 상징하며 다양한 확장이 가능합니다. 
            타이틀, 인물 사진, 기타 이미지와 함께 활용할 수 있으며 
            잡플렉스 브랜드 아이덴티티와 시각적 정보를 효과적으로 전달합니다.
            '
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section30;