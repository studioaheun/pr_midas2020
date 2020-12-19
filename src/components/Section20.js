import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section20l from '../images/section20_L.png';
import section20r from '../images/section20_R.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 12rem 0;
  background-color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  @media (max-width: 768px) {
    padding:1rem 0;
  }
  `,

  Imgleft: styled.div`
  position:absolute;
  top:0;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1770px;
    margin:0 auto;
  }
  `,
  Imgright: styled.div`
  position:absolute;
  top:0;
  right:0;
  text-align:center;
  overflow:hidden;
  img {
    max-width:1770px;
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

const Section20 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.7, 0),
    1: useScrollFadeIn('up', 0.7, 1),


  }; 

  return (
  <S.Wrapper>
    <div className ={'section20-div'}>
      <S.Imgleft {...animatedItem[0]}>
      <img         
              src = {section20l}
              width='100%'
              height='auto'
              alt='통찰력 있는 전문가
              선도적이고 혁신적인
              명확하고 확신을 가진
              사람과 자연과학의 이치를 이해하는
              기술력이 뛰어난
              '
            />

      </S.Imgleft>
      <S.Imgright {...animatedItem[1]}>
      <img         
              src = {section20r}
              width='100%'
              height='auto'
              alt='따듯하고 친절한 조력자
              타인의 마음을 잘 이해하는
              바르고 진정성 있는
              관계지향적이며 공감에 능한
              인간적인 매력이 있는
              '
            />

      </S.Imgright>
    </div>
  </S.Wrapper>
  );
}

export default Section20;