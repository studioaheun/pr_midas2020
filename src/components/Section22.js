import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section22 from '../images/section22.png';
import section22mob from '../images/section22_mobile.png';

import sectionScript22 from '../images/section22_1.png';

import sectionmv22 from '../vid/sectionmv22.mp4';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding-top:9rem;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  @media (max-width: 768px) {
    padding-top:6rem;
  }
  `,

  Imgdiv: styled.div`
  width:88%;
  text-align:center;
  overflow:hidden;
  margin-bottom:6rem;
  img {
    max-width:1786px;
  }`
  ,
  Viddiv: styled.div`
  width:100%;
  text-align:center;
  overflow:hidden;
  img {
    display:none;
  }
  @media (max-width: 1199px) {
    img{
      display:block;
    }
    video {
      display:none;
    }
  }
  `,
  
  Img2div: styled.div`
  width:88%;
  text-align:center;
  overflow:hidden;
  margin-bottom:10rem;
  margin-top:10rem;
  img {
    max-width:1626px;
    margin:0 auto;
  }
  @media (max-width: 768px) {
    margin-top:4rem;
    margin-bottom:4rem;
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
  Paradiv: styled.div`
  width:100%;
  margin-top:2rem;


  `,

  Para: styled.p` 
  width:50%;
  margin:0 auto;
  margin-top:9rem;
  font-size:1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight:400;
  line-height:160%;
  color:#fff;
  text-align:center;
  word-break:keep-all;

  @media (max-width: 768px) {
    margin-top:6rem;
    font-size:1.4rem;
  }
  `,

}

const Section22 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),
    0: useScrollFadeIn('up', 0.8, 1),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv>
    <img         
            src = {section22}
            width='100%'
            height='auto'
            alt='GRAPHIC MOTIF - Data Capability
            Spectrum Image Logo'
          />

    </S.Imgdiv>
    <S.Viddiv>
      <video className='section22-vid' width= '100%' height='auto' autoPlay loop muted>
        <source src={sectionmv22} type='video/mp4' />
      </video>
      <img         
            src = {section22mob}
            width='100%'
            height='auto'
            alt='JOBFLEX 스펙트럼 로고 이미지'
          />
    </S.Viddiv>
  <S.Img2div >
    <img         
            src = {sectionScript22}
            width='100%'
            height='auto'
            alt='알파벳 F 이면에 사람의 실루엣을 품은 잡플렉스 로고는 복잡한 채용시장에서 인재들이
            잠재 역량을 가시화하고 이를 확장해 나가는 모습을 직관적으로 그려낸 디자인입니다.
           
           빠르고 정확한 채용이 이뤄지는 잡플렉스의 경험을 전달하기 위해 지오메트릭한 서체와 소문자 조합을 활용했으며
           혁신적인 서비스 안에서도 신뢰감을 느낄 수 있도록 볼드한 워드마크 형태로 디자인 되었습니다.
           
           유연하게 변주 가능한 컬러 스펙트럼은 기업과 구직자의 다양성을 드러내는 표현도구로, 개인 프로필 또는
           기업의 아이덴티티를 시각화 하거나, 다양한 매체에서 브랜드 주목도를 높이는 요소로 유연하게 사용할 수 있습니다.'
          />

    </S.Img2div>
  </S.Wrapper>
  );
}

export default Section22;