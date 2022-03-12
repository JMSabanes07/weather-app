import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.theme.text.primary};
    outline: none;
    list-style: none;
  }

`
