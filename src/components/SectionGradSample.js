import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import GradientSample1 from '../images/grad_01.png';
import GradientSample2 from '../images/grad_02.png';
import GradientSample3 from '../images/grad_03.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  flex-wrap:warp;
  @media (max-width: 768px) {
    display:none;
  }
}

  `,
  LeftDiv: styled.div`
  width:50%;
  height:100vh;
  left:0;
  top:0;
   
  `,

  RightDiv1: styled.div`
  width:50%;
  height:100vh;
  right:0;
  top:0;
  `,
 

}

const SectionGradSample = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 

  return (
  <S.Wrapper>
      <S.LeftDiv {...animatedItem[0]} ><img         
            src = {GradientSample1}
            width='100%'
            height='auto'
            alt='testGradientA'
          /></S.LeftDiv> 
      <S.RightDiv1 {...animatedItem[1]} >
      <img         
            src = {GradientSample2}
            width='100%'
            height='auto'
            alt='testGradientB'
          />
      </S.RightDiv1>
    </S.Wrapper>
  );
}

export default SectionGradSample;