import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import section16title from '../images/section16title.png';

import BgImg from '../images/background_texture.png';

import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding-top:6rem;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  `,
  Title: styled.h2`
  width:100%;
  color: black;
  text-align: center;
  font-size:8rem;
  font-weight:100;
  line-height:103%;
  @media (max-width: 768px) {
    width:90%;
    padding-top:1rem;
    margin:0 auto;
    font-size:4.6rem;
  }
  `,
  Paradiv: styled.div`
  width:100%;
  margin-top:2rem;
  `,

  Para: styled.p` 
  width:57%;
  margin:0 auto;
  font-size:1.45rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:500;
  line-height:170%;
  color:#333;
  text-align:center;
  word-break:keep-all;
  margin-bottom:10rem;
  @media (min-width: 768px) and (max-width:1199px) {
    font-size:1.3rem;
  }

  @media (max-width: 768px) {
    font-size:1.45rem;
  }
  `,
  Titlediv: styled.div`
  width:100%;
  margin-top:1.45rem;
  `
  ,

  Imgtitle: styled.div`
  width:88%;
  margin:0 auto;

  margin-top:1rem;
  margin-bottom:3.5rem;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1626px;
    margin:0 auto;
  }
  `
  ,

}

const Section16 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
  }; 

  return (
  <S.Wrapper>
    <S.Titlediv {...animatedItem[0]}>
      <S.Imgtitle>
      <img         
            src = {section16title}
            width='100%'
            height='auto'
            alt='Brand Concept'
          />
      </S.Imgtitle>

      <S.Title className ={'txt-gradient2'} >
        DISCOVER<br/>
        YOUR<br/>
        SPECTRUM
      </S.Title>
    </S.Titlediv>
    <S.Paradiv>
      <S.Para className ={'txt-gradient2'} {...animatedItem[1]}>
        잡플렉스는 뇌신경과학과 빅데이터 기반의 AI 프로파일링을 통해 <br/>
        사람의 고유한 역량을 발견하고, 최적의 인재를 찾는 기업과 연결시켜 <br/>
        정확하고 공정한 선발, 쉽고 빠른 채용을 돕는 가장 진보된 채용 플랫폼입니다. 
        </S.Para>
    </S.Paradiv>
  </S.Wrapper>
  );
}

export default Section16;