const Movie = require('../models/Movie')


const createMovie = async (req, res) => {
  const { name, time, year,rating,director,actors,types } = req.body;
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
      image
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
module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
}
