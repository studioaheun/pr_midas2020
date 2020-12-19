import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImgOnce';
import useScrollCount from '../hooks/useScrollCount';

import '../index.scss';

import section11 from '../images/section11.png';
import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 120px 0;
  background-image:url(${BgImg});
  overflow:hidden;
  @media (max-width: 768px) {
    padding:6rem 0;
  }
  `,

  Imgdiv: styled.div`
  width:88%;
  max-width:1480px;
  margin-top:2rem;
  text-align:center;
  margin:0 auto;
  
  img {
    max-width:1480px;
  }
  `,
  Numdiv: styled.div`
  width:44%;
  max-width:740px;
  margin-left:50%;
  margin-top:1rem;
  div {
    border-bottom:1px solid #fff;
    width:100%;
    position:relative;
  }
  p {
    padding-top:2rem;
    font-size:1rem;
    color:#fff;
    text-align:left;
  }
  span {
    color:#00c17c;
    font-size:16.5rem;
    font-weight:100;
    line-height:90%;
    letter-spacing:-1rem;
  }
  b {
    position:absolute;
    bottom:1.2rem;
    right:0;
    font-weight:400;
    text-align:right;
  }
  @media (min-width: 1441px) and (max-width: 1700px){

    span {
      font-size:14rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px){
    width:88%;
    margin:0 auto;
    margin-top:3rem;
    span {
      font-size:12rem;
    }
  }
  @media (max-width: 768px) {
    width:88%;
    margin:0 auto;
    margin-top:3rem;
    p {
      font-size:1.6rem;
    }
    span {
      font-size:15rem;
    }
  }
  `,

}

const Section9 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1, 0.3),
    1: useScrollFadeIn('up', 1, 0.6),
    2: useScrollFadeIn('up', 1, 0.9),
  }; 
  const countItem = {
    0: useScrollCount(914),
    1: useScrollCount(60),
  };

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section11}
            width='100%'
            height='auto'
            alt='4. SIMPLIFY :
            잡플렉스는 채용 프로세스를 혁신하고 싶다. 우리는 기업에 대한 솔루션도
            가지고 있으니 구직자들에게 기업을 소개해주거나 구직자와 채용자 모두가 
            공채 시스템을 초압축 해줄 수 있는 서비스를 하고자 한다. 

            잡플렉스는 공채 채용으로 인해 비효율적이고 무거운 채용시장에 상시채용이
            보편화된 새로운 취업 패러다임을 만들고 싶다. 

            역량검사 결과, 이력서 등을 올려놓으면 기업에서 원할 때마다
            바로 연결이 될 수 있도록 하고 싶다. 언제든지 쉽게 쉽게, 무거운 채용시장을
            가볍게 혁신하고자 하는 것이 우리의 목표이다.  

            | PD | 
            '
          />
    </S.Imgdiv>
    <S.Numdiv {...animatedItem[1]}>
      <div> 
        <p>
          <span {...countItem[0]} >700</span> <span>+</span>
        <b>채용플랫폼 고객사</b>
        </p>
      </div> 
      <div>
        <p>
         <span className={'outline-num'} {...countItem[1]} >0</span>
        <b>10기업 지원 소요 시간 = 1명당 60분</b>
        </p>
      </div>
      </S.Numdiv>
  </S.Wrapper>
  );
}

export default Section9;