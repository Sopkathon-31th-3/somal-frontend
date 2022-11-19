import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    display: flex;
    flex-direction: column;
    max-width: 39rem;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: Galmuri14, sans-serif;
    background-color: #EE5959;
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
