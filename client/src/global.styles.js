import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
    color: #333;

    @media screen and (max-width: 800px){
      padding: 10px
    }

    @media (prefers-color-scheme: dark){
      background-color: #333;
      color: #ccc;
    }
  }

  a{
    text-decoration: none;
    color: #333;

    @media (prefers-color-scheme: dark){
      color: #ccc;
    }
  }

  *{
    box-sizing: border-box;
  }
`