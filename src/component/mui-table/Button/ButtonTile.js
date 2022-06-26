import React from "react";

import Icon from "./butonicon";
import styled, { css } from "styled-components";

const ButtonTile = ({ type, size, text, description, noIcon, ...props }) => (
  <Tile type={type} size={size} {...props}>
    {!noIcon && <Icon size={type === "primary" ? 28 : 16} />}
    <div> {text} </div>
    {description && <div className="desc"> {description} </div>}
  </Tile>
);

export default ButtonTile;

const extendedStyle = (type = "primary", size = "sm") => {
  switch (type) {
    case "primary":
      switch (size) {
        case "lg":
          return css`
            padding: 36px 34px 34px 34px;
            font-weight: 500;
            line-height: 14px;
            > div {
              margin-top: 16px;
              &.desc {
                margin-top: 12px;
                font-style: italic;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #888d9d;
              }
            }
          `;
        case "sm":
          return css`
            max-width: 350px;
            padding: 18px 16px 16px 16px;
            font-weight: 500;
            line-height: 19px;
            > div {
              margin-top: 14px;

              &.desc {
                margin-top: 12px;
                font-style: italic;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #888d9d;
              }
            }
          `;
        default:
          return extendedStyle();
      }
    case "secondary":
      return css`
        display: flex;
        justify-content: center;
        padding: 0px;
        > div {
          margin-left: 11px;
        }
      `;
    default:
      extendedStyle();
  }
};

const Tile = styled.button`
  margin: 0px 0;
  background: transparent;
  border: 0px solid #f3f3f3;

  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.13);

  ${(props) => extendedStyle(props.type, props.size)};
`;
