import styled, { createGlobalStyle } from "styled-components";

export const GlobalElement = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "League Spartan";
  }

  body {
    background-color: black;
    color: white;
    padding: 2rem ;
  }
`

export const Footer = styled.div`
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
