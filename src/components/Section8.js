import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeInImgOnce';

import '../index.scss';

import section8 from '../images/section8.png';
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
  img {
    max-width:1480px;
    margin:0 auto;
  }
  `

  ,


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
              src = {section8}
              width='100%'
              height='auto'
              alt='INFORM : 구직자와 구인자의 정보 불일치, 정보의 왜곡을 사통팔달로 뚫어버리겠다는
              목적이었다. 장을 보듯이, 쇼핑 하듯이 물건을 고르고 맛도 볼 수 있는
              시장의 틀을 만들어 나온 것이 잡플렉스이다. 
              
              | CHO | 
              
              채용 전체에서 발생하는 데이터를 종합적으로 활용해서 
              최종 결정에 도움을 주는 것을 지향하고 있다. 

              AI역량검사는 사람이 잘 할 수 있는, 가능성 있는 부분을
              가르치는 것이 아닌 찾을 수 있도록 도와주는 것. 

              | PD | 

              '
            />

    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section13;