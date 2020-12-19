import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImgOnce';

import '../index.scss';

import section10 from '../images/section10.png';
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
  `,

}

const Section10 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section10}
            width='100%'
            height='auto'
            alt='3. MATCH :
                잡플렉스는 ‘좋은 사람과 좋은 기업이 만나는 곳’이다. 
                결국 사람과 기업이 만나는 플랫폼이며 그 안에 있는 사람과 기업은 
                정서의 관점이 아닌 능력과 가치가 맞는 서로 시너지가 나는 사람들이다.
                
                우리가 하고자 하는 핵심은 이러한 모듈을 모두 사용해서
                인재가 기업에 잘 들어갈 수 있도록 하는 것이다.  
                
                | PD | '
          />
    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section10;