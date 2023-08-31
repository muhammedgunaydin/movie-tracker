import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import axios from 'axios'
import '../styles/WatchlistPage.css'
import { useSelector } from 'react-redux'

function Watchlist() {
  const { userId } = useSelector((state) => state.User)
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:9000/movie/${userId}/watchlist`)
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
  }, [userId])

  const [ratings, setRatings] = useState({})

  useEffect(() => {
    const storedRatings = localStorage.getItem('ratings')
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings))
    }
  }, [])

  return (
    <div>
      <Header />
      <div className="watchlist-container">
        <h2 className="watchlist-header">My Watchlist</h2>
        <ul className="movie-list">
          {watchlist.map((movie) => (
            <li key={movie._id} className="movie-item">
              <span className="movie-name">{movie.name}</span>
              <span className="movie-rating">
                {ratings[movie._id] && ratings[movie._id] > 0
                  ? `Rating: ${ratings[movie._id]}`
                  : 'Not Rated'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Watchlist
