import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section18 from '../images/section18.png';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 200px 0;
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
  max-width:1920px;
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

const Section18 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
          src = {section18}
          width='100%'
          height='auto'
          alt='Core Values
          Quality Information 양질의 정보
          Intelligent Matching 지능적인 매칭
          Super - Simple Process 초간편 프로세스
          Brand Slogan
          스펙을 넘어 스펙트럼을 봅니다. 잡플렉스
          단편적인 정보가 아닌 진짜 역량과 가능성까지 보여줄 수 있도록.
          채용에서 끝나지 않고 최고의 성과와 성장까지 이어질 수 있도록.
          잡플렉스는 한 사람 한 사람의 고유한 스펙트럼을 봅니다.
          '
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section18;