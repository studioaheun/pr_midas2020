import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import '../index.scss';

import section13 from '../images/section13.png';
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
    max-width:1626px;
    margin: 0 auto;
  }
  `,

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
            src = {section13}
            width='100%'
            height='auto'
            alt='Background / Market Research 
            Inform - 정확하고 충분한 기업 / 구직자 데이터
            Identify - AI역량검사로 고성과자 선별
            Match - 원패스 지원 초압축 언택트 채용 채용프로세스 혁신
            Simplify - 원패스 지원 초압축 언택트 채용 채용프로세스 혁신
            Customize - 기업별 맞춤화 전형 채용을 직접 설계하는 곳

            Corporate Philosophy - 마이다스 자연주의 인본사상
            Applicants / Job-seekers - 점점 악화되는 취업준비 및 구직 환경
            Company / HR Market - 채용 패러다임의 변화 (상시채용, 비대면)
            '
          />
    </S.Imgdiv>
  </S.Wrapper>
  );
}

export default Section13;