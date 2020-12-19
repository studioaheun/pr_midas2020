import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import useScrollCount from '../hooks/useScrollCount';
import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:40vh;
  padding: 120px 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  `,
  Heading: styled.h2`
  position:absolute;
  left:2rem;
  color: white;
  margin-top: 4rem;
  text-align: left;
  font-size:3rem;
  @media (max-width: 768px) {
    position:relative;
    width:100%;
    left:0;
    margin-top:3rem;
    text-align:center;
  }
  `,
  BigNumberBoxA: styled.div`
  position:absolute;
  right:10%;
  width:40%;
  font-size:6rem;
  font-weight:100;
  height:40vh;
  line-height:40vh;
  text-align:right;
  @media (max-width: 768px) {
    position:relative;
    width:100%;
    left:0;
    margin-top:3rem;
    text-align:center;
  }
  `,
  BigNumber: styled.span`
  color: white;
  margin-left:4rem;
  font-size:12rem;
  font-weight:100;
  line-height:40vh;
  transition: all 0.4s ease;
  &:hover {
    color: #00b2ff;
  }
  
  `,
  SmallNumber: styled.h3`
  color: black;
  margin-top: 10rem;
  text-align: center;
  font-size:2rem;
  `,

  Box: styled.div` 
    margin-top:2rem;
    width:100%;

    `,

}

const Section4 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.2),
    1: useScrollFadeIn('up', 1, 0.3),
    2: useScrollFadeIn('up', 1, 0.4),
  }; 
  const countItem = {
    0: useScrollCount(4),
    1: useScrollCount(54),
    2: useScrollCount(192),
  };

  return (
    <S.Wrapper>
    <S.Heading {...animatedItem[0]}>
      JOBFLEX <br/>by the numbers
    </S.Heading> 
      <S.BigNumberBoxA {...animatedItem[1]} >
        <S.BigNumber {...countItem[0]} >0</S.BigNumber>
        <S.BigNumber {...countItem[1]} >0</S.BigNumber>

      </S.BigNumberBoxA>
    </S.Wrapper>
  );
}

export default Section4;