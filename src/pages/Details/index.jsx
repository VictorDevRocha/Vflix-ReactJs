import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import APIKey from "../../../Key/APIKey";

function Details() {

const { id } = useParams()

const { movie, setMovie } = useState([])
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
    console.log(movie)
    setMovie
  })
},[id])

  return (
  <h1>Helo World</h1>
  )
}

export default Details;