import React from 'react';
import { useEffect } from "react";

import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInSc2Loop';
//import useScrollBtn from '../hooks/useScrollBtn';

import section2_1 from '../images/section2_1.png';
import section2_2 from '../images/section2_2.png';

import SvgArrowGradient from './svgprops/SvgArrowGradient'


import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:200vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width:769px) and (max-width: 1199px) {
    height:140vh;
  }
  @media (max-width:768px){
    height:120vh;
  }
  
  `,

  Bkbox: styled.div` 
  width:100%;
  height:100vh;
  background-color:#000;
  text-align:center;
  @media (min-width:769px) and (max-width: 1199px) {
    height:70vh;
  }
  @media (max-width:768px){
    height:60vh;
  }
  `,
  
  Box: styled.div` 
    width:100%;
    height:100vh;
    background-color:white;
    text-align:center;

    @media (min-width:769px) and (max-width: 1199px) {
      height:70vh;
    }
    @media (max-width:768px){
      height:60vh;
    }
    `,
  Imgdiv: styled.div` 
  width:88%;
  margin:0 auto;
  height:100vh;
  line-height:100vh;
  text-align:center;

  img{
    display:inline-block;
    vertical-align:middle;
    margin:0 auto;
    padding-bottom:2rem;
    max-width:1626px;

  }
  @media (min-width:769px) and (max-width: 1199px) {
    width:100%;
    height:70vh;
    line-height:70vh;
  }
  @media (max-width:768px){
    width:100%;
    height:60vh;
    line-height:60vh;
  }
  `,

    Svg: styled.div` 
    position:relative;
    width:108px;
    height:108px;
    z-index:999;
  
    `,
}

const Section2 = () => {
  const animatedItem = { 0: useScrollFadeIn('up', 1, 1.2),
                         1: useScrollFadeIn('up', 1, 1.2),
  }; 

  //  const animatedBtn = useScrollBtn();                   

  useEffect(() => {
    const getScroll = document.getElementById("Sc2getScroll");
    const svgbtn = document.getElementById("myBtn");

    const sticky = getScroll.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
      svgbtn.classList.add("sticky-svg");

    } else {
      svgbtn.classList.remove("sticky-svg");
 
    }
  });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Bkbox {...animatedItem[0]}>
        <S.Imgdiv>
        <img         
            src = {section2_1}
            width='100%'
            height='auto'
            alt='Overview - 잡플렉스는
            기존 브랜드를 재정의하고 새롭게 시각화하여
            일관된 브랜드 경험을 제시하고자 합니다. '
          />
        </S.Imgdiv>
      </S.Bkbox>
      <S.Box {...animatedItem[1]}>
      <S.Imgdiv>
        <div>
          <img         
                src = {section2_2}
                width='100%'
                height='auto'
                alt='Overview - 잡플렉스는
                What보다
                Why에 집중합니다.'
              />
        </div>
        </S.Imgdiv>
        <div id = "Sc2getScroll"></div>
      </S.Box>
      <div id = "myBtn">
          <a href ="https://www.jobflex.com" target="blank">
          <SvgArrowGradient>
          </SvgArrowGradient>
          </a>
        </div>
    </S.Wrapper>
  );
}

export default Section2;