import React from "react";
import Styled, { css } from "styled-components";


const Box = Styled.div`
  
  position: relative;
  width:  600px;
  height: 400;
  dispplay: flex;
  justify-content: center;
  align-items: center;
  background:"#060c21";
  border-radius: 40px;
  &::before {
    
    border-radius: 40px;
    content: '';
    background: #fff;
    
    background: linear-gradient(225deg, #ffbbff, #060c21, #00bcd4);
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    /* border-radius: 4px; */
  }

  &::after {
    border-radius: 40px;
    content: '';
    
    filter: blur(40px);
    background: linear-gradient(225deg, #ffbbff, #060c21, #00bcd4);
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    /* border-radius: 4px; */
  }
 
    
  
`;

const Content = Styled.div`

  padding: 20px;
  box-sizing: border-box;
  color: #fff;
`;

const GlowingGradientBorderCard = () => (
  <Box>
    <Content>
      <h1>Glowing border</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </Content>
  </Box>
);

export default GlowingGradientBorderCard;
