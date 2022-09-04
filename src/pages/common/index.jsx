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

export const Navbar = styled.nav`
  background-color: transparent;
  padding: 20px;
  padding-top: 30px;
  user-select: none;

  .Link {
    text-decoration: none;
  }

  .navAjust {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      gap: 12px;
      list-style-type: none;
    }
  }

  .enter {
    border: none;
    padding: 8px 17px;
    font-size: 1rem;
    border-radius: 2px;
    background-color: red;
    color: white;
    cursor: pointer;
    margin-right: 3rem;
    text-align: center;
    padding-top: 10px;
    font-weight: 500;
    transition: 50ms;
  }

  p {
    color: red;
    font-size: 3rem;
    padding-left: 2rem;
    font-weight: 700;
  }

  button:hover {
    background-color: #860f0f;
  }

  @media (max-width: 510px) {
    .enter {
      margin-right: 1rem;
    }
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
