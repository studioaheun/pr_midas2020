import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImgOnce';
import useScrollCount from '../hooks/useScrollCount';

import '../index.scss';

import section9 from '../images/section9.png';
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
    margin:0 auto;
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
  span{
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
    0: useScrollCount(82),
    1: useScrollCount(2),
    2: useScrollCount(6),
  };

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section9}
            width='100%'
            height='auto'
            alt='2. IDENTIFY :
            기업에 좋은 사람을 많이 보내야 하는데 기업이 좋은 사람을 보는 눈이 
            없는 것 같다. 체험과 경험이 창의성을 담당하는 기본적인 뇌의 네트워크를 
            만들어 주는데 이처럼 스펙이 아닌 역량을 체크하는 인적성 프로그램을 
            개발해야겠다는 생각을 했다.

            마이다스는 심리학, 신경과학, 물리학, 우주론을 바탕으로 ‘인간이 무엇이다’ 
            라는 정답을 정확하게 알고 있다. 
            우리가 알고 있는 것은 아주 근원적인 것이며 그것이 바로 
            마이다스의 핵심 기술이다. 

            | CHO | '
          />
    </S.Imgdiv>
    <S.Numdiv {...animatedItem[1]}>
      <div> 
        <p>
          <span {...countItem[0]} >0</span> <span>%</span>
        <b>고성과자 선발확률</b>
        </p>
      </div> 
      <div>
        <p>
        <span className={'outline-num'}>V</span> <span className={'outline-num'} {...countItem[1]} >0</span>
        <b>소통역량</b>
        </p>
      </div>
      <div>
        <p>
        <span className={'outline-num'}>P</span> <span className={'outline-num'} {...countItem[2]} >0</span>
        <b>성과역량</b>
        </p>
      </div>  
      </S.Numdiv>
  </S.Wrapper>
  );
}

export default Section9;