import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    font-size: 10px; 
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }
`;

export default GlobalStyle;
