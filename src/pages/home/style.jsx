import styled from "styled-components";
import netflix from "../../assets/netflix.png";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
    font-size: 3rem;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export const Netfli = styled.div`
  background-image: url(${netflix});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .teste {
    display: flex;
    justify-content: center;
    padding-top: 130px;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    h3 {
      font-size: 4rem;
      padding-bottom: 0.5rem;
      text-align: center;
      font-weight: 500;
    }

    p {
      font-size: 2rem;
      padding-bottom: 1.9rem;
    }

    input {
      padding: 19px;
      width: 500px;
      border: none;
      font-size: 25px;
      outline: none;
    }

    .label {
      padding-bottom: 1rem;
      font-size: 1.5rem;
    }

    .Input {
      display: flex;
      flex-direction: row;
      justify-content: center;
      user-select: none;
      margin-bottom: 150px;
    }

    button {
      color: white;
      background-color: red;
      padding: 19px;
      border: none;
      width: 160px;
      font-size: 25px;
      font-weight: 400;
      transition: 150ms;
      cursor: pointer;
    }

    button:hover {
      background-color: #860f0f;
    }

    @media (max-width: 680px) {
      input {
        width: 350px;
        font-size: 20px;
      }

      button {
        font-size: 20px;
      }
    }

    @media (max-width: 510px) {
      .teste {
        padding-top: 50px;
      }

      input {
        width: 275px;
        font-size: 20px;
      }

      button {
        width: 100px;
        font-size: 20px;
      }

      h3 {
        font-size: 3rem;
      }
    }

    @media (max-width: 410px) {
      input {
        width: 80%;
        font-size: 20px;
        margin-left: 10px;
      }

      button {
        margin-right: 10px;
      }
    }
  }
`;
