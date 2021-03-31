import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: none;
    text-decoration: none;
    list-style: none;

    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }

  body {
    background: #1D1431;
    height: 100vh;
    color: #F4F4F4;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, a {
    cursor: pointer;
    color: #F4F4F4;
  }
`