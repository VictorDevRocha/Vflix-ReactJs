import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;

  h1 {
    margin: 1rem 0;
    font-size: 2.5rem;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
    font-size: 1.2rem;
  }

  button {
    background: red;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
  }

  button:hover {
    background: #860f0f;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .realease-Date {
    opacity: 0.5;
  }

  @media (max-width: 1080px) {
    .details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 1rem;
      max-width: 70%;
    }
  }

  @media (max-width: 700px) {
    div {
      flex-direction: column;
    }

    .details {
      max-width: 80%;
      align-items: center;
      text-align: center;
      margin-left: 0;
    }

    img {
      width: 400px;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 300px;
    }

    .details {
      max-width: 85%;
    }
  }
`;
