import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding:200px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  @media (max-width: 768px) {
    padding:10rem 0;
    height:auto;
    margin-top:0;
  }
  `,
  Title: styled.h2`
  width:calc(100% - 7rem);
  height:14.5rem;
  color: black;
  text-align: left;
  padding-left:7rem;
  margin-top:5rem;
  font-size:6rem;
  font-weight:600;
  line-height:125%;
  span {
    margin-left:15.4rem;
  }
  @media (max-width: 768px) {
    width:75%;
    height:11.5rem;
    padding-top:1rem;
    padding-left:0;
    margin:0 auto;
    font-size:4rem;
    span {
      margin-left:10rem;
    }
  }
  `,
  Paradiv: styled.div`
    width:calc(100% - 7rem);
    padding-left:7rem;
    margin-top:1.6rem;
    margin-bottom:10rem;
    @media (max-width: 768px) {
    width:75%;
    padding-top:1rem;
    padding-left:0;
    margin:0 auto;
    font-size:4rem;
  }
  `,

  Para: styled.p` 
  width:57%;
  padding-left:15.6rem;
  margin-top:4rem;
  font-size:1.6rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:400;
  line-height:160%;
  color:#333;
  text-align:left;
  word-break:keep-all;
  margin-bottom:5rem;
  span {
    font-family: 'Poppins', sans-serif;
    font-weight:400;

      }
    }
    @media (min-width: 768px) and (max-width: 1199px){
      padding-left:15.6rem;
    }
  
    @media (max-width: 768px) {
      font-size:1.3rem;
      padding-left:10rem;
      width:calc(100% - 10rem);
      margin-top:0;
      margin:0 auto;
    }
    `,

}

const Section6 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
      <S.Title className={'txt-gradient2'} {...animatedItem[0]}>
        Why In depth<br/>
        <span></span>Interview
    </S.Title>
    <S.Paradiv>
        <S.Para {...animatedItem[1]}>
          프로젝트를 시작하기에 앞서<br/>
          잡플렉스의 본질과 고객에게 전달되어야 하는 가치가 무엇인지 공감하고,<br/>
          프로젝트 목표 및 방향성을 확인하기 위해<br/>
          마이다스 잡플렉스 <span>TFT</span>구성원 인터뷰를 진행했습니다.
        </S.Para>
    </S.Paradiv>
  </S.Wrapper>
  );
}

export default Section6;