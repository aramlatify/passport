import styled, { css } from "styled-components/macro";
import { FaArrowCircleLeft, FaRegEdit } from "react-icons/fa";

export const IconArrowLeft = styled(FaArrowCircleLeft)``;

export const IconEdit = styled(FaRegEdit)`
  width: 20px;
`;

export const Button = styled.button`
  ${(props) => css`
    ${console.log("style", props)}
    color: white;
    border: 1px solid rgb(45, 136, 255);
    background: rgb(45, 136, 255);
    padding: 0.8rem 1.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 0.8rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    &:hover,
    &:focus {
      color: rgb(228, 230, 235);
      border: 1px solid rgb(45, 136, 255);
      background: rgb(45, 136, 255);
    }

    svg {
      margin-right: 1rem;
    }

    ${(props) => {
      if (props.variant === "outline") {
        return css`
          color: rgb(45, 136, 255);
          border: 1px solid rgb(45, 136, 255);
          background: transparent;
        `;
      }

      if (props.variant === "icon") {
        return css`
          color: rgb(45, 136, 255);
          background: unset;
          padding: 8px;

          &:hover,
          &:focus {
            color: white;
          }

          svg {
            margin: unset;
          }
        `;
      }

      if (props.variant === "onlyIcon") {
        return css`
          color: rgb(45, 136, 255);
          border: 1px solid transparent;
          background: gray;
          padding: 8px;

          &:hover,
          &:focus {
            color: white;

            border: 1px solid transparent;
            background: gray;
          }

          svg {
            margin: unset;
          }
        `;
      }
    }}
  `}
`;
