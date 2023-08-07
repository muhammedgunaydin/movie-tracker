import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import axios from 'axios'

function AllMovies() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/movie', {
      })
      .then((response) =>{
        setMovieList(response.data.movies)
  }).catch((error) => console.error('Veri çekme hatası:', error))

  }, [])
  return (
    <div>
        <Header></Header>
      <h1 style={{fontSize:65}}>All Movies</h1>
      <ul>
        {movieList.map((movie, index) => (
          <li key={index}>
            <h3>{movie.name}</h3>
            <strong>Movie Time</strong>: {movie.time}<br></br>
            <strong>Director</strong>: {movie.director}<br></br>
            <strong>Year</strong>: {movie.year}<br></br>
            <strong>Rating</strong>: {movie.rating}<br></br>
            <strong>Actors</strong>: {movie.actors}<br></br>
            <strong>Movie Types</strong>: {movie.types}<br></br>
            <img src={`http://localhost:9000/uploads/${movie.image}`} alt={movie.name} style={{ maxWidth: '200px'}} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllMovies

