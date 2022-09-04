import { useState, useEffect } from "react";
import { Container, Movie, MovieList, Netfli } from "./style";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../common";

const KEY = import.meta.env.VITE_SOME_KEY;

function Home() {
  const imgURL = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  });

  return (
    <div>
      <Netfli>
        <Navbar>
          <navbar className="navAjust">
            <Link to="/" className="Link">
              <p>
                V<span>Flix</span>
              </p>
            </Link>
            <ul>
              <li>
                <button className="enter">Sign In</button>
              </li>
            </ul>
          </navbar>
        </Navbar>
        <div className="teste">
          <div>
            <h3>Unlimited movies,</h3>
            <h3>TV shows, and more.</h3>
            <p>Watch anywhere. Cancel anytime.</p>
            <p className="label">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="Input">
              <input type="email" name="email" id="email" placeholder="Email" />
              <button type="submit">Get started</button>
            </div>
          </div>
        </div>
      </Netfli>
      <Container>
        <h1>Top 20 Movies Today</h1>
        <MovieList>
          {movies.map((movie) => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    src={`${imgURL}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <span>{movie.title}</span>
              </Movie>
            );
          })}
        </MovieList>
      </Container>
      <Footer>
        <div class="footerAjust">
          <span>By Victor Rocha &copy; 2022</span>
          <a
            href="https://www.linkedin.com/in/victor-rocha-58056223a/"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
        <div class="footerAjust">
          <a href="tel:+5513982051521">Tell: (13)98205-1521</a>
          <a href="mailto:victorrochadev0@gmail.com">
            E-mail: victorrochadev0@gmail.com
          </a>
        </div>
      </Footer>
    </div>
  );
}

export default Home;
