import styled from "styled-components"
import netflix from "../../assets/netflix.png"

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`

export const MovieList = styled.ul`

  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`

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
`

export const Netfli = styled.div`
  
  background-image: url(${netflix});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h3 {
    font-size: 4rem;
    padding-bottom: 0.5rem;
    text-align: center;
    width: 70%;
    font-weight: 500;
  }

  h2 {
    font-size: 4rem;
    padding-bottom: 0.5rem;
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
  }

  .label {
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }

  .Input {
    display: flex;
    flex-direction: row;
  }

  button {
    color: white;
    background-color: red;
    padding: 19px;
    border: none;
    width: 140px;
    font-size: 25px;
    font-weight: 400;
  }
` 