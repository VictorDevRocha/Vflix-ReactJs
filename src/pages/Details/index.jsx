import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import APIKey from "../../../Key/APIKey";
import { Footer } from "../common";
import { Container } from "./style";

function Details() {

const { id } = useParams()

const [movie, setMovie] = useState([])
const imgURL = "https://image.tmdb.org/t/p/w500/"


useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
  .then(response => response.json())
  .then(data => {

    const { title, poster_path, overview, release_date} = data

    const movie = {
      id,
      title,
      sinopse: overview,
      image: `${imgURL}${poster_path}`,
      releaseDate: release_date
    }
    setMovie(movie)
  })
},[id])

  return (
    <div>
      <Footer>
        <footer>
          <Link to="/" className="Link"><p>V<span>Flix</span></p></Link>
        </footer>
      </Footer>
      <Container>
        <div className="movie">
          <img src={movie.image} alt={movie.title} />
          <div className="details">
            <h1>{movie.title}</h1>
            <span>Sinopse: {movie.sinopse}</span>
            <span className="realease-Date">Release date: {movie.releaseDate}</span>
            <Link to="/"><button>Go Back</button></Link>
          </div>
        </div>
      </Container>
    </div>
    )
}

export default Details;