import { useState, useEffect } from "react";
import APIKey from "../../../Key/APIKey";
import { Container, Movie, MovieList } from "./style";

function Home() {

  const imgURL = "https://image.tmdb.org/t/p/w500/"

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  })

  return (
  <Container>
    <h1>Movies</h1>
    <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <a href="http://"><img src={`${imgURL}${movie.poster_path}`} alt={movie.title} /></a>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
    </MovieList>
  </Container>)
}

export default Home;