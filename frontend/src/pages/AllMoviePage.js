import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import axios from 'axios';
import '../styles/AllMoviePage.css';

function AllMovies() {
  const [movieList, setMovieList] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    axios.get('http://localhost:9000/movie')
      .then((response) => {
        let sortedMovies = [...response.data.movies];

        if (sortType === 'az') {
          sortedMovies = sortedMovies.sort((a, b) => a.name.localeCompare(b.name));
        }
        
        setMovieList(sortedMovies);
      })
      .catch((error) => console.error('Error while fetching data:', error));
  }, [sortType]);

  const addToWatchlist = (movieId) => {

  };

  const addToFavorites = (movieId) => {

  };

  const rateMovie = (movieId, rating) => {

  };

  return (
    <div>
      <Header />
      <div className="all-movies-container">
        <h1 className="page-title">All Movies</h1>
        
        <div className="sort-options">
          <label>Sort By: </label>
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="default">Default</option>
            <option value="az">A to Z</option>
          </select>
        </div>
        
        <ul className="movie-list">
          {movieList.map((movie, index) => (
            <li key={index} className="movie-item">
              <div className="movie-details">
                <h3>{movie.name}</h3>
                <strong>Movie Time</strong>: {movie.time}<br />
                <strong>Director</strong>: {movie.director}<br />
                <strong>Year</strong>: {movie.year}<br />
                <strong>Rating</strong>: {movie.rating}<br />
                <strong>Actors</strong>: {movie.actors}<br />
                <strong>Movie Types</strong>: {movie.types}<br />
              </div>
              <img
                src={`http://localhost:9000/uploads/${movie.image}`}
                alt={movie.name}
                className="movie-image"
              />
              <div className="movie-actions">
                <button onClick={() => addToWatchlist(movie._id)}>Add to Watchlist</button>
                <button onClick={() => addToFavorites(movie._id)}>Add to Favorites</button>
                <button onClick={() => rateMovie(movie._id, 5)}>Rate 5 Stars</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllMovies;