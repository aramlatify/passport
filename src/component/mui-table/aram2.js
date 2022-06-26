import React from "react";
import Styled, { css } from "styled-components";
import PropTypes from "prop-types";

const LinearGradientBackground = css`
  background: linear-gradient(235deg, ${props => props.linearGradientColors});
`;

const LinearGradientPosition = css`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
`;

const Box = Styled.div`
  position: relative;
  width:  ${props => `${props.width}px`};
  dispplay: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};

  &::before {
    content: '';
    background: #fff;
    
    ${LinearGradientBackground}
    ${LinearGradientPosition}
  }

  &::after {
    content: '';
    
    filter: blur(40px);
    ${LinearGradientBackground}
    ${LinearGradientPosition}
  }
`;

const Content = Styled.div`
padding: 20px;

color: #fff;
position: relative;
background: black;


  
  justify-content: center;
  align-items: center;
  
  z-index: 1;
  

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
  width: 300,
  background: "#060c21",
  linearGradientColors: "#89ff00, #060c21, #00bcd4"
};

export default GlowingGradientBorderCard;
