import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    display: flex;
    flex-direction: column;
    max-width: 37.5rem;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
  }

  html,
  body {
    font-size: 10px; 
    font-family: Galmuri14, sans-serif;
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
