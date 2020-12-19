import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding:100px 0;
  margin-top:200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding:10rem 0;
    height:auto;
    margin-top:0;
  }
  `,
  Title: styled.h2`
  width:calc(100% - 7rem);
  height:15.5rem;
  color: black;
  text-align: left;
  padding-left:7rem;
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
  font-size:1.6rem;
  margin-top:2.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:400;
  line-height:160%;
  color:#333;
  text-align:left;
  word-break:keep-all;
  span {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }
  @media (min-width: 769px) and (max-width: 1199px){
    padding-left:15.6rem;
  }

  @media (max-width: 768px) {
    display:none;
  }
  `,
  ParaMob: styled.p` 
  display:none;
  width:calc(100% - 10rem);
  padding-left:10rem;
  font-size:1.3rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:400;
  line-height:160%;
  color:#333;
  text-align:left;
  word-break:keep-all;

  span {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
  }
  @media (min-width: 769px) and (max-width: 1199px){
    padding-left:15.6rem;
  }
  @media (max-width: 768px) {
    display:block;
  }
  `,

}

const Section4 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
  }; 

  return (
  <S.Wrapper>
    <S.Title className ={'txt-gradient2'} {...animatedItem[0]}>
      Why New<br/>
      <span>Branding</span>
    </S.Title>
    <S.Paradiv {...animatedItem[1]}>
      <S.Para>
          <span>JOBFLEX</span>는 기존 채용시장의 구조와 프로세스를 혁신하여 <br />
              새로운 채용 패러다임을 만들고자 하는 브랜드 비전을 실현하기 위한 방안의 하나로
              본 프로젝트를 진행하였습니다.  <br/>
      </S.Para>
      <S.Para>
              디자인은 고객의 경험을 창조하는 기술입니다. <br />
              따라서 <span>JOBFLEX</span>디자인은 채용시장의 변화와 함께 유연하게 확장되는 개념을
              본질로 삼으며 <span>WHAT</span>보다 <span>WHY</span>에 집중하는 과정을 통해 고객들이 경험할 새로운
              가치를 만들고자 하였습니다. 2021년, 새롭게 선보이는 <span>JOBFLEX</span>는 채용시장에서
              구직자와 인사담당자들에게 좋은 인재와 좋은 기업을 올바르게 연결하는 <br/>
              본질적 가치를 전달하기 위해 가장 이상적인 메시지를 제시합니다.
        </S.Para>
        <S.ParaMob>
          <span>JOBFLEX</span>는 기존 채용시장의 구조와 프로세스를 혁신하여
              새로운 채용 패러다임을 만들고자 하는 브랜드 비전을 실현하기 위한 방안의 하나로
              본 프로젝트를 진행하였습니다. <br/>
      </S.ParaMob>
      <S.ParaMob>
      <br/>
              디자인은 고객의 경험을 창조하는 기술입니다.<br/>
              따라서 <span>JOBFLEX</span>디자인은 채용시장의 변화와 함께 유연하게 확장되는 개념을
              본질로 삼으며 <span>WHAT</span>보다 <span>WHY</span>에 집중하는 과정을 통해 고객들이 경험할 새로운
              가치를 만들고자 하였습니다. 2021년, 새롭게 선보이는 <span>JOBFLEX</span>는 채용시장에서
              구직자와 인사담당자들에게 좋은 인재와 좋은 기업을 올바르게 연결하는
              본질적 가치를 전달하기 위해 가장 이상적인 메시지를 제시합니다.
        </S.ParaMob>
    </S.Paradiv>
  </S.Wrapper>
  );
}

export default Section4;