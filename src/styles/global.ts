import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #e9f1f6;
    color: #335d7a;
    -webkit-font-smoothing: antialiased;
  }
`