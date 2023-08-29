import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header'

const PanelPage = () => {
  const navigate = useNavigate()
  const [movie, setMovie] = useState([])

  const navigateCreateMovie = async (e) => {
    e.preventDefault()
    navigate('/create-movie')
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:9000/movie')
      setMovie(response.data.movies)
      console.log(response.data.movies)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  const handleDelete = async (filmId) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/movie/${filmId}`
      )
      console.log('Movie deleted successfully:', response.data)
      fetchMovies()
    } catch (error) {
      console.error('Error deleting movie:', error)
    }
  }

  return (
    <div>
      <Header></Header>
      <button onClick={navigateCreateMovie}> Create Movie </button>
      <h2>Delete Movies</h2>
      <ul>
        {movie.map((movie) => (
          <li key={movie._id}>
            {movie.name}{' '}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PanelPage
