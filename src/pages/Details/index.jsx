import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer, Navbar } from "../common";
import { Container } from "./style";

const KEY = import.meta.env.VITE_SOME_KEY;

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const imgURL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
      )
      .then((response) => {
        const { title, poster_path, overview, release_date } = response.data;

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imgURL}${poster_path}`,
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <div>
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
      <Container>
        <div className="movie">
          <img src={movie.image} alt={movie.title} />
          <div className="details">
            <h1>{movie.title}</h1>
            <span>Sinopse: {movie.sinopse}</span>
            <span className="realease-Date">
              Release date: {movie.releaseDate}
            </span>
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </div>
        </div>
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

export default Details;
