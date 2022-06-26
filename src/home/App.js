import React, { useState } from "react";

import styled, { keyframes } from "styled-components";

import { ReactComponent as ReactLogo } from "../assets/logo.svg";
import BackgroundMountain from "../assets/verdecita.png";


function App() {
  const [value, setValue] = useState();

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  console.log(value);

  return (
    <>
      <div>
        <Header>
          <AppWrapper>
            <img2 src={ReactLogo} alt="" />
          </AppWrapper>

          <h1>
            بەخێربێن بۆ پەرەی فەرمی <br /> نوسینگەی <span>پاسپۆرتی </span>{" "}
            گەرمیان
          </h1>

          <figure className="background-container">
            <img className="background" src={BackgroundMountain} alt="" />
          </figure>
          <TextContainer>
            <div>
              لە نوسینگەکەمان مامەڵەی سنوری ئەم ناوچانەی لای خوارەوە ڕایی دەکرێت{" "}
              <br /> <span>( کەلار - دەربەندیخان - کفری - خانەقین)</span> <br />{" "}
              واتە دەبێت هاوڵاتی خاوەنی کارتی زانیاری یەکێ لەم ناوچانە بیت
            </div>
          </TextContainer>
        </Header>
        </div>
      
        </>
   
  

   
  );
}


const float = keyframes`
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 10px); }
    to   { transform: translate(0, -0px); } 
`;


/* For 1920 Desktop */ 
const AppWrapper = styled(ReactLogo)`
  margin-top: 5px;
  height: 10rem;
  width: 10rem;
  display: inline-block;
  position: absolute;
  
  
  left: 0;
  
  flex: 0.8;
  animation: ${float} 3s ease-in-out infinite;
  
  
  @media (max-width: 980px) {
    margin-top: 5px;
    height: 8rem;
  width: 8rem;
  margin-left: 5px;
  left: 0;
  }
  @media (max-width: 780px) {
    margin-top: 3px;
    height: 6rem;
  width: 6rem;
  margin-left: 4px;
  left: 0;
  }
`;

const TextContainer = styled.div`
  

  margin-top: 0px;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5em;
  transform: translate(-5%, -200%);
  span {
    color: orange;
  }
  @media (max-width: 950px) {
    margin-top: 10px;
  color: white;
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.5em;
  transform: translate(0%, -200%);
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: bottom;
  }
`;

const Header = styled.header`
height: 17rem;
  padding-top: 1rem;
  position: relative;
  
  @media (max-width: 1450px) {
    
  }
  @media (max-width: 780px) {
    height: 10rem;
    padding-top: 0.5rem;
  }
 
  .background-container {
   
    height: 100%;
    top: 5%;
    left: 0;
    z-index: -2;
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 10px;
    margin-inline-end: 0px;
    img {
      
      width: 100%;
    height: 100%;
    object-fit: fill;
    }
    @media (max-width: 1450px) {
    
    }
    @media (max-width: 980px) {
      width: 98%;
      height: 100%;
      top: 5%;
      left: 0;
      z-index: -2;
      display: block;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 5px;
      margin-inline-end: 0px;
      img {
        
        width: 101%;
      height: 100%;
      object-fit: fill;
      }
    }
  }
  
  h1 {
    position: absolute;
    color: white;
    font-weight: 1000;
    font-size: 2rem;
    text-align: right;
    line-height: 1.5em;
    transform: translate(-25%, 20%);
    span {
      color: orange;
    }
    @media (max-width: 1450px) {
    
    }
    @media (max-width: 980px) {
      font-size: 1.5rem;
    
    line-height: 1.7em;
    transform: translate(-10%, 10%);
    }
  }
  
  
  
  
`;



export default App;

// <= 600px celulares
// <= 900px tabletas
// <= 1280px laps
// <= 1920px laps o pc de escritorio con full HD
