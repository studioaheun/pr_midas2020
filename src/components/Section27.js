import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import BgImg from '../images/background_texture.png';
import section27 from '../images/section27title.png';


import '../index.scss';

const S = {
  Wrapper: styled.section`
  width: 100%;
  height:80vh;
  padding: 0;
  overflow:hidden;
  @media (max-width: 768px) {
    height:50vh;
  }
  `,
  Imgdown: styled.div`
  width:50%;
  height:100%;
  float:left;
  @media (max-width: 768px) {
    width:100%;
    height:50%;
  }
  `,

  Imgup: styled.div`
  width:50%;
  height:100%;
  float:right;
  @media (max-width: 768px) {
    width:100%;
    height:50%;
  }
  `,
  
  Imgtitle: styled.div`
  position:absolute;
  top:4rem;
  width:100%;
  left:0;
  @media (max-width: 768px) {
    font-size:2.4rem;
  }
  `,

}

const Section27 = () => {
  const animatedItem = { 
    0: useScrollFadeIn('up', 1.4, 0),
    1: useScrollFadeIn('down', 1, 1),
    2: useScrollFadeIn('up', 1, 1.5),

  }; 

  return (
  <S.Wrapper>
  <div style ={{width:'100%', position:'relative'}} >
    <S.Imgtitle >
        <img         
            src = {section27}
            width='100%'
            height='auto'
            alt='Spectrum
            Gradient'
          />
    </S.Imgtitle>

    <S.Imgdown >
      <div className = {'section27-left'}>
      </div>
    </S.Imgdown>
    <S.Imgup >
      <div className = {'section27-right1'}>
        
      </div>
      <div className = {'section27-right2'}>
        
        </div>
    </S.Imgup>
    </div>  
  </S.Wrapper>
  );
}

export default Section27;