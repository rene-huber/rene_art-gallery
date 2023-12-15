import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background: #262729
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
