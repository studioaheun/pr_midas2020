import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import useScrollFadeInGuide from '../hooks/useScrollFadeInGuide';

import '../index.scss';
import SvgArrowdw from '../components/svgprops/SvgArrowdw.js';
import IconThumb1 from '../images/icon_1.png';
import IconThumb2 from '../images/icon_2.png';
import IconThumb3 from '../images/icon_3.png';
import IconThumb4 from '../images/icon_4.png';
import IconThumb5 from '../images/icon_5.png';
import IconThumb6 from '../images/icon_6.png';
import IconThumb7 from '../images/icon_7.png';
import IconThumb8 from '../images/icon_8.png';
import IconThumb9 from '../images/icon_9.png';
import IconThumb10 from '../images/icon_10.png';
import IconThumb11 from '../images/icon_11.png';
import IconThumb12 from '../images/icon_12.png';
import IconThumb13 from '../images/icon_13.png';
import IconThumb14 from '../images/icon_14.png';
import IconThumb15 from '../images/icon_15.png';
import IconThumb16 from '../images/icon_16.png';
import IconThumb17 from '../images/icon_17.png';
import IconThumb18 from '../images/icon_18.png';
import IconThumb19 from '../images/icon_19.png';
import IconThumb20 from '../images/icon_20.png';
import IconThumb21 from '../images/icon_21.png';
import IconThumb22 from '../images/icon_22.png';
import IconThumb23 from '../images/icon_23.png';
import IconThumb24 from '../images/icon_24.png';


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
  }
  `,
  Contdiv: styled.div`
  width:100%;
  height:auto;
  background-color:#fff;
  margin-top:8.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content : center;
  align-content: stretch;
  div {
    width:calc(16.67% - 1.4rem - 6px);
    margin:0.9rem;
    height:auto;
    border:0.5px solid #00c17c;
    img {
      display:block;
      transition: all 0.4s ease;
      &:hover {
        transform:scale(1.1);
      }
    }
  }
  div:nth-child(1),
  div:nth-child(6n+1) {
    margin-left:0;
  }
  div:nth-child(6n) {
    margin-right:0;
  }
  @media (max-width: 768px) {
    width:100%;
    div {
      width:calc(33.3% - 1.1rem - 3px);
      img {
        padding:0;
      }
    }
  div:nth-child(6n+1) {
    margin-left:0.9rem;
  }
  div:nth-child(6n) {
    margin-right:0.9rem;
  }
    div:nth-child(6n) {
    margin-right:0.9rem;
  }
  div:nth-child(1),
  div:nth-child(3n+1) {
    margin-left:0rem;
  }
  div:nth-child(3n) {
    margin-right:0rem;
  }
  }
  `,
}

const DownloadIcon = () => {
  const animatedItem = { 
    0: useScrollFadeInGuide('up', 0.8, 0.2),
    1: useScrollFadeInGuide('up', 0.8, 0.7),

  }; 

    return( 
      
      <S.Wrapper>
        <SubMenu/>

        <S.Maindiv {...animatedItem[0]}>
          <S.Navdiv >
            <ul>
              <li><Link to ="/DownloadGuide">Guide</Link><span></span></li>
              <li><Link to ="/DownloadTemplet">Templet</Link><span></span></li>
              <li><Link to ="/DownloadIcon"><b>Icons</b></Link></li>
            </ul>
          <p>각 아이콘을 클릭하면 ai 다운로드가 가능합니다.</p>

          </S.Navdiv>
          <S.Titlediv>
            <h3>Icon</h3>

          </S.Titlediv>
          <S.Contdiv>
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_1.ai" target="blank">

                <img         
                    src = {IconThumb1}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 1'
                  />
              </a>
            </div>
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_2.ai" target="blank">

                <img         
                    src = {IconThumb2}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 2'
                  />
              </a>
            </div>
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_3.ai" target="blank">

                <img         
                    src = {IconThumb3}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 3'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_4.ai" target="blank">

                <img         
                    src = {IconThumb4}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 4'
                  />
              </a>
            </div>
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_5.ai" target="blank">

                <img         
                    src = {IconThumb5}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 5'
                  />
              </a>
            </div>             
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_6.ai" target="blank">

                <img         
                    src = {IconThumb6}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 6'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_7.ai" target="blank">

                <img         
                    src = {IconThumb7}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 7'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_8.ai" target="blank">

                <img         
                    src = {IconThumb8}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 8'
                  />
              </a>
            </div>           
             <div>
              <a href ="https://designmidas.cafe24.com/download/icon_9.ai" target="blank">

                <img         
                    src = {IconThumb9}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 9'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_10.ai" target="blank">

                <img         
                    src = {IconThumb10}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 10'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_11.ai" target="blank">

                <img         
                    src = {IconThumb11}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 11'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_12.ai" target="blank">

                <img         
                    src = {IconThumb12}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 12'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_13.ai" target="blank">

                <img         
                    src = {IconThumb13}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 13'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_14.ai" target="blank">

                <img         
                    src = {IconThumb14}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 14'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_15.ai" target="blank">

                <img         
                    src = {IconThumb15}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 15'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_16.ai" target="blank">

                <img         
                    src = {IconThumb16}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 16'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_17.ai" target="blank">

                <img         
                    src = {IconThumb17}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 17'
                  />
              </a>
            </div>            
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_18.ai" target="blank">

                <img         
                    src = {IconThumb18}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 18'
                  />
              </a>
            </div>           
             <div>
              <a href ="https://designmidas.cafe24.com/download/icon_19.ai" target="blank">

                <img         
                    src = {IconThumb19}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 19'
                  />
              </a>
            </div> 
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_20.ai" target="blank">

                <img         
                    src = {IconThumb20}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 20'
                  />
              </a>
            </div> 
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_21.ai" target="blank">

                <img         
                    src = {IconThumb21}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 21'
                  />
              </a>
            </div> 
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_22.ai" target="blank">

                <img         
                    src = {IconThumb22}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 22'
                  />
              </a>
            </div>
                        <div>
              <a href ="https://designmidas.cafe24.com/download/icon_23.ai" target="blank">

                <img         
                    src = {IconThumb23}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 23'
                  />
              </a>
            </div>  
            <div>
              <a href ="https://designmidas.cafe24.com/download/icon_24.ai" target="blank">

                <img         
                    src = {IconThumb24}
                    width='100%'
                    height='auto'
                    alt='jobflex icon 24'
                  />
              </a>
            </div>
          </S.Contdiv>
        </S.Maindiv>
      </S.Wrapper>
    );
}
  
  export default DownloadIcon;
