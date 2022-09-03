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
  }
`

export const Footer = styled.div`

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ff1616dc;
    padding: 15px;
  }
  
  .Link {
    text-decoration: none;
  }
  
  p {
    color: white;
    font-size: 2.5rem;
    padding-left: 1.5rem;
    font-weight: 700;
  }

  span {
    color: black;
  }
`