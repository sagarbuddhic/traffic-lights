// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const container = css`
  margin: 0 auto;
  display: grid;
`;

export const heading = css`
  font-size: 20px;
  color: brown;
  margin: 20px auto;
  box-shadow: 0 3px 6px 0 brown;
`;

export const lightsContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 25px;
  margin: 0 auto;
  background-color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
`;

export const lights = css`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 10px;
  display: block;
  background-color: grey;
  box-shadow: 0 2px 4px white, 0 5px 10px grey;

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
