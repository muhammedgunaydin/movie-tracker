import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import axios from 'axios'
import '../styles/AllMoviePage.css'
import { useSelector } from 'react-redux'

function MovieRating({ movieId, onRate }) {
  const [rating, setRating] = useState(0)

  const handleRate = () => {
    if (rating >= 1 && rating <= 5) {
      onRate(movieId, rating)
    }
  }

  return (
    <div className="movie-rating">
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <button onClick={handleRate}>Rate</button>
    </div>
  )
}

function AllMovies() {
  const [movieList, setMovieList] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [ratings, setRatings] = useState({})
  const [sortType, setSortType] = useState('default')
  const { userId } = useSelector((state) => state.User)

  useEffect(() => {
    axios
      .get('http://localhost:9000/movie')
      .then((response) => {
        let sortedMovies = [...response.data.movies]

        if (sortType === 'az') {
          sortedMovies = sortedMovies.sort((a, b) =>
            a.name.localeCompare(b.name)
          )
        }

        setMovieList(sortedMovies)
      })
      .catch((error) => console.error('Error while fetching data:', error))
  }, [sortType])

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/${userId}/watchlist`)
      .then((response) => {
        setWatchlist(response.data)
      })
      .catch((error) => {
        console.error('Error while fetching watchlist:', error)
      })

    const storedWatchlist = localStorage.getItem('watchlist')
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist))
    }

    const storedRatings = localStorage.getItem('ratings')
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings))
    }
  }, [userId])

  const addToWatchlist = (movieId) => {
    axios
      .post('http://localhost:9000/movie/watchlist', {
        userId: userId,
        movieId: movieId,
      })
      .then((res) => {
        console.log('Movie added to watchlist', res.data)
        const updatedWatchlist = [...watchlist, movieId]
        setWatchlist(updatedWatchlist)
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist))
      })
      .catch((err) =>
        console.error('Error while adding to watchlist:', err.message)
      )
  }

  const removeFromWatchlist = (movieId) => {
    axios
      .post('http://localhost:9000/movie/watchlist/remove', {
        userId: userId,
        movieId: movieId,
      })
      .then((res) => {
        console.log('Movie removed from watchlist', res.data)
        const updatedWatchlist = watchlist.filter((id) => id !== movieId)
        setWatchlist(updatedWatchlist)
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist))
      })
      .catch((err) =>
        console.error('Error while removing from watchlist:', err.message)
      )
  }

  const rateMovie = (movieId, rating) => {
    axios
      .post('http://localhost:9000/movie/rate', {
        userId: userId,
        movieId: movieId,
        rating: rating,
      })
      .then((res) => {
        console.log('Movie rated successfully', res.data)
        setRatings((prevRatings) => ({
          ...prevRatings,
          [movieId]: rating,
        }))
        localStorage.setItem(
          'ratings',
          JSON.stringify({ ...ratings, [movieId]: rating })
        )
      })
      .catch((err) => console.error('Error while rating movie:', err.message))
  }

  const isMovieInWatchlist = (movieId) => {
    return watchlist.includes(movieId)
  }

  return (
    <div>
      <Header />
      <div className="all-movies-container">
        <h1 className="page-title">All Movies</h1>

        <div className="sort-options">
          <label>Sort By: </label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="az">A to Z</option>
          </select>
        </div>

        <ul className="movie-list">
          {movieList.map((movie) => (
            <li key={movie._id} className="movie-item">
              <div className="movie-details">
                <h3>{movie.name}</h3>
                <strong>Movie Time</strong>: {movie.time}
                <br />
                <strong>Director</strong>: {movie.director}
                <br />
                <strong>Year</strong>: {movie.year}
                <br />
                <strong>Rating</strong>: {movie.rating}
                <br />
                <strong>Actors</strong>: {movie.actors}
                <br />
                <strong>Movie Types</strong>: {movie.types}
                <br />
              </div>
              <img
                src={`http://localhost:9000/uploads/${movie.image}`}
                alt={movie.name}
                className="movie-image"
              />
              <div className="movie-actions">
                <MovieRating
                  movieId={movie._id}
                  onRate={(movieId, rating) => rateMovie(movieId, rating)}
                />
                {isMovieInWatchlist(movie._id) ? (
                  <button onClick={() => removeFromWatchlist(movie._id)}>
                    Remove Watchlist
                  </button>
                ) : (
                  <button onClick={() => addToWatchlist(movie._id)}>
                    Add to Watchlist
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllMovies
