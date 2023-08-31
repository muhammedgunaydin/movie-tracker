const Movie = require('../models/Movie')
const User = require('../models/User')

const createMovie = async (req, res) => {
  const { name, time, year, rating, director, actors, types } = req.body
  const image = req.file.filename
  try {
    const movie = await Movie.create({
      name,
      time,
      year,
      rating,
      director,
      actors,
      types,
      image,
    })
    res.status(201).json(movie)
  } catch (err) {
    res.status(400).send(`Error while creating movie : ${err.message}`)
  }
}

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json({ movies })
  } catch (err) {
    res.status(400).send(`Error while getting all movies : ${err.message}`)
  }
}

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOne({ _id: id })
    res.status(200).json({ movie })
  } catch (err) {
    res.status(400).send(`Error while getting movie : ${err.message}`)
  }
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOneAndUpdate({ _id: id }, { $set: req.body })
    res.status(200).send('Movie updated successfully')
  } catch (err) {
    res.status(400).send(`Error while updating movie : ${err.message}`)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOneAndDelete({ _id: id })
    res.status(200).send('Movie deleted successfully')
  } catch (err) {
    res.status(400).send(`Error while deleting movie : ${err.message}`)
  }
}

const addToWatchlist = async (req, res) => {
  try {
    const { userId, movieId } = req.body
    const user = await User.findById(userId)

    const movie = await Movie.findById(movieId)

    user.watchlist.push(movie)
    await user.save()
    res.json({ message: 'Movie added to watchlist' })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
  }
}

const getWatchlist = async (req, res) => {
  try {
    const userId = req.params.userId
    const user = await User.findById(userId).populate('watchlist')
    res.status(200).json(user.watchlist)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
  }
}

const removeFromWatchlist = async (req, res) => {
  try {
    const { userId, movieId } = req.body

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    user.watchlist.pull(movieId)
    await user.save()

    res.json({ message: 'Movie removed from watchlist' })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
  }
}

const rateMovie = async (req, res) => {
  try {
    const { userId, movieId, rating } = req.body
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const movie = await Movie.findById(movieId)
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    const existingRating = user.ratings.find(
      (r) => r.movie.toString() === movieId
    )
    if (existingRating) {
      existingRating.rating = rating
    } else {
      user.ratings.push({ movie: movieId, rating: rating })
    }

    await user.save()
    res.json({ message: 'Rating added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' })
  }
}

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist,
  rateMovie,
}
