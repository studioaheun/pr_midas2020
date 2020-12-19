import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import '../index.scss';
import SvgArrowdw from '../components/svgprops/SvgArrowdw.js';
import Guidethumb from '../images/guide.png';
import useScrollFadeInGuide from '../hooks/useScrollFadeInGuide';

import SubMenu from '../components/SubMenu.js';


const S = {
  Wrapper: styled.section`
  width: 100%;
  height:160vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  `,
  Title: styled.h2`
  width:78%;
  height:14.5rem;
  color: black;
  text-align: left;
  margin-left:22%;
  font-size:6rem;
  font-weight:600;
  line-height:118%;
  @media (max-width: 768px) {
    width:90%;
    padding-top:1rem;
    margin:0 auto;
    font-size:2.4rem;
  }
  `,
  Maindiv: styled.div`
  width:78%;
  margin-top:16rem;
  max-width:1920px;
  padding-bottom:12rem;
  `,
  Navdiv: styled.div`
  width:100%;
  height:4rem;
  border-bottom:0.5px solid #383838;
  li {
    list-style:none;
    float:left;
    font-family: 'Poppins', sans-serif;
    font-weight:600;
    color:#000;
    font-size:2.4rem;
    margin-right:1.5rem;
    cursor: pointer;
  }
  span {
    display:inline-block;
    width:1px;
    height:1.8rem;
    border-right:0.5px solid #383838;
    margin-left:1.5rem;
  }

  p {
    float:right;
    font-size:1.3rem;
    padding-top:1.1rem;

  }
  a {
    color:#000;
    transition: all 0.4s ease;
    &:hover {
      color: #00c17c;
    }
  }
  b { 
    font-weight:600;
    color:#00c17c;
  }
  @media (max-width: 1199px) {
    border:none;
    height:8rem;
    ul {
      width:100%;

    }
    p {
      display:block;
      width:100%;
      padding-top:0.6rem;
      margin-top:0.4rem;
      border-top:0.5px solid #383838;

    }
  }
  `,
  Titlediv: styled.div`
  width:100%;
  height:7.5rem;
  margin-top:2rem;
  h3 {
    font-size:6.5rem;
    float:left;
  }
  span {
    padding-top:2.5rem;
    float:right;
    width:4rem;
    height:4rem;
    cursor:pointer;
    transition: all 0.4s ease;
    &:hover {
      transform:scale(1.1);
    }
  }
  
  `,
  Contdiv: styled.div`
  width:100%;
  height:auto;
  background-color:#fff;
  border:0.5px solid #00c17c;
  margin-top:8.5rem;
  @media (max-width: 1199px) {
    margin-top:4rem;
  }
  `
}

const DownloadGuide = () => {
  const animatedItem = { 
    0: useScrollFadeInGuide('up', 0.8, 0.2),
    1: useScrollFadeInGuide('up', 0.8, 0.8),

  }; 

    return( 
      
      <S.Wrapper>
        <SubMenu/>

        <S.Maindiv {...animatedItem[0]}>
          <S.Navdiv >
            <ul>
              <li><Link to ="/DownloadGuide"><b>Guide</b></Link><span></span></li>
              <li><Link to ="/DownloadTemplet">Templet</Link><span></span></li>
              <li><Link to ="/DownloadIcon">Icons</Link></li>
            </ul>
          <p>화살표를 클릭하면 PDF 다운로드가 가능합니다.</p>

          </S.Navdiv>
          <S.Titlediv>
            <h3>Guide</h3>
            <span>
            <a href ="https://designmidas.cafe24.com/download/JobFlex_Brand%20Identity%20Guidelines_201214_FINAL.pdf" target="blank">
              <SvgArrowdw></SvgArrowdw>
            </a>
            </span>
          </S.Titlediv>
          <S.Contdiv>
          <img         
              src = {Guidethumb}
              width='100%'
              height='auto'
              alt='Background = Inform Identify Match Simplify Customize'
            />
          </S.Contdiv>
        </S.Maindiv>
      </S.Wrapper>
    );
}
  
  export default DownloadGuide;
