import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    overflow-x: hidden
    
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

.buttonFav {
  height: 200;
  background: none;
  border: none

}

`;
