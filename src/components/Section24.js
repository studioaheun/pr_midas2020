import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImg2';

import '../index.scss';

import section24 from '../images/section24.png';

import BgImg from '../images/background_texture.png';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:auto;
  padding: 0;
  background-image:url(${BgImg});
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;

  `,

  Imgdiv: styled.div`
  width:100%;
  text-align:center;
  overflow:hidden;
  img {
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

const Section24 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 0.8, 0),

  }; 

  return (
  <S.Wrapper>
    <S.Imgdiv {...animatedItem[0]}>
    <img         
            src = {section24}
            width='100%'
            height='auto'
            alt='BRAND COLOR | FONT SYSTEM
            JOBFLEX의 메인 컬러인 Reliable Green은 선진적이면서도 신뢰감 있는 
            긍정성이 발현되는 플랫폼을 상징하며, Expert Navy와 함께 사용하여
            진중하면서도 세련된 이미지를 전달합니다.
            추가적으로 잡플렉스 브랜드의 컨셉을 표현하는 스펙트럼 그라디언트 컬러를
            활용하여 FLEXIBLE한 플랫폼과 혁신적이고 열정 가득한 이미지를 표현합니다.  

            지정된 국/영문 서체는 가독성이 좋으며 젊고 산뜻한 이미지를 강조할 수 있고, 
            간결하고 명료한 형태로 JOBFLEX의 브랜드 이미지를 보다 
            일관적으로 전달할 수 있습니다.'
          />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section24;