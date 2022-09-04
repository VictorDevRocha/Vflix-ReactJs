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
`;

export const Navbar = styled.div`
  navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: red;
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
`;

export const Footer = styled.footer`
  height: 10vh;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 30px;
  background-color: red;
  margin-top: 75px;

  .footerAjust {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
