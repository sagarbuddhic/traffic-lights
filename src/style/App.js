// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const heading = css`
  font-size: 20px;
  color: black;
`;

export const lights = css`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 10px;
  display: block;
  background-color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &.red {
    background-color: red;
  }

  &.yellow {
    background-color: yellow;
  }

  &.green {
    background-color: green;
  }
`;
