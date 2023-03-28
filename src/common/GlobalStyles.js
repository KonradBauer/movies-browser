import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #151316;
    border-radius: 10px;
    border: 2px solid #efebeb;
  }
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background: #F5F5FA;
   
  
  }
`;
