import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section12 from '../images/section12.png';
import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 120px 0;
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
  margin-top:2rem;
  text-align:center;
  max-width:1480px;
  img{
    margin:0 auto;
  }
  `,

}

const Section13 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section12}
            width='100%'
            height='auto'
            alt='5. CUSTOMIZE : 
            잡플렉스는 ‘내가 채용을 설계하는 공간이다.’ 라는 인식을 많이
            만들어주고 싶다. 채용 전체를 디자인 하는 것이 제일 중요하다. 

            기업 커스터마이징, 기업별로 모델링을 다르게 하겠다는 지향점을 
            가지고 있다. 기업별로 원하는 인재상을 뽑을 수 있도록 특화된 서비스를 
            제공하는 것이다. 

            각 기업들마다 채용 기준을 확립해 주는 경험을 만들고 싶다는 생각을 
            하고 있다. 현재 AI역량검사도 기업별로 커스터마이징이 가능한 
            차별성이 있다.

            | PD | 
            '
          />
    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section13;