import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import sectionmv14 from '../vid/sectionmv14.mp4';
import section14title from '../images/section14title.png';

import section14_2 from '../images/section14_2.png';
import section14mob from '../images/section14_mobile.png';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 120px 0;
  background-color:black;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;

  `,

  Imgdiv: styled.div`
  width:88%;
  margin-top:1rem;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1626px;
    margin:0 auto;
  }
  `,
  Viddiv: styled.div`
  width:100%;
  margin-top:2rem;
  text-align:center;
  overflow:hidden;
  margin:0 auto;
  img {
      display:none;
    }
  @media (max-width: 1199px) {
    img {
      display:block;
      margin:3rem auto;
    }
    video {
      display:none;
    }
  }
  
  `,
  Imgtitle: styled.div`
  width:88%;
  margin-top:1rem;
  margin-bottom:0.5rem;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1626px;
    margin:0 auto;
  }
  `,

}

const Section14 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),
    1: useScrollFadeIn('up', 0.8, 0),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
    <S.Imgtitle>
      <img         
          src={section14title}
          width='100%'
          height='auto'
          alt='Value Proposition'
        />
    </S.Imgtitle>
    <S.Imgdiv {...animatedItem[0]}>

        <S.Viddiv>
          <video className='section22-vid' width= '100%' height='auto' autoPlay loop muted>
            <source src={sectionmv14} type='video/mp4' />
          </video>
          <img         
          src={section14mob}
          width='100%'
          height='auto'
          alt='본질적 가치 - 인간 본질에 대한 이해를 바탕으로 한 통합적 채용 솔루션
          차별적 가치 - 매칭의 품질, 적은 노력으로 더 좋은 인재 채용
          궁극적 가치 - 개개인의 자아 실현 사회적 가치의 선순환
          '
        />
        </S.Viddiv>
    <img         
          src={section14_2}
          width='100%'
          height='auto'
          alt='CORE - EXTENDED '
        />
    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section14;