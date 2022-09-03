import { useState, useEffect } from "react";
import APIKey from "../../../Key/APIKey";
import { Container, Movie, MovieList } from "./style";
import { Link } from "react-router-dom"
import { Footer, Netfli } from "../common";


function Home() {

  const imgURL = "https://image.tmdb.org/t/p/w500/"

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  })

  return (
    <div>
      <Footer>
        
        <footer>
          <Link to="/" className="Link"><p>V<span>Flix</span></p></Link>
        </footer>
      </Footer>
      <Netfli></Netfli>
      <Container>
        <h1>Movies</h1>
        <MovieList>
          {movies.map(movie => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}><img src={`${imgURL}${movie.poster_path}`} alt={movie.title} /></Link>
                <span>{movie.title}</span>
              </Movie>
            )
          })}
        </MovieList>
      </Container>
    </div>
  )}

export default Home;