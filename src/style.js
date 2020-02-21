// styles/index.js
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // You can continue writing global styles here
  body {
    /* text-align: center; */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: dark;
    box-sizing: border-box;
  }
  `;

// colors
export const dark = 'rgb(45, 55, 55)';
export const fontDark = '#4b4b4b';
export const yellow = '#FFDE00';
export const green = 'linear-gradient(45deg, black, transparent)';
export const greenBg = 'linear-gradient(180deg, #12b447, #10a140)';
