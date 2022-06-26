import React from "react";
import Styled, { css } from "styled-components";
import PropTypes from "prop-types";

const LinearGradientBackground = css`
  background: linear-gradient(225deg, ${(props) => props.linearGradientColors});
`;

const LinearGradientPosition = css`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
`;

const Box = Styled.div`
  /* border-radius: 8px; */
  position: relative;
  width:  ${(props) => `${props.width}px`};
  height:  ${(props) => `${props.height}px`};
  dispplay: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 40px;
  &::before {
    border-radius: 40px;
    content: '';
    background: #fff;
    z-index: -1;
    background: ${LinearGradientBackground}
    position: ${LinearGradientPosition}
    /* border-radius: 4px; */
  }

  &::after {
    border-radius: 40px;
    content: '';
    z-index: -2;
    filter: blur(40px);
    background: ${LinearGradientBackground}
    position: ${LinearGradientPosition}
    /* border-radius: 4px; */
  }
  @media screen and (max-width: 520px) and (max-width: 1024px) {
    position: relative;
  width:  300px;
  height:  ${(props) => `${props.height}px`};
  dispplay: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 40px;
  &::before {
    border-radius: 40px;
    content: '';
    background: #fff;
    z-index: -1;
    background: ${LinearGradientBackground}
    position: ${LinearGradientPosition}
    /* border-radius: 4px; */
  }

  &::after {
    border-radius: 40px;
    content: '';
    z-index: -2;
    filter: blur(40px);
   background: ${LinearGradientBackground}
    position: ${LinearGradientPosition}
    /* border-radius: 4px; */
  }
   
    
  }
`;

const Content = Styled.div`

  padding: 20px;
  box-sizing: border-box;
  color: #fff;
`;

const GlowingGradientBorderCard = ({ children, ...rest }) => (
  <Box {...rest}>
    <Content>{children}</Content>
  </Box>
);

GlowingGradientBorderCard.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
  background: PropTypes.string,
  linearGradientColors: PropTypes.string
};

GlowingGradientBorderCard.defaultProps = {
  width: 1000,
  height: 150,
  background: "#060c21",
  linearGradientColors: "#ffbbff, #060c21, #00bcd4"
};

export default GlowingGradientBorderCard;
