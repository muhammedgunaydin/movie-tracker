const Movie = require('../models/Movie')

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json(movie)
  } catch(err) {
    res.status(400).send(`Error while creating movie : ${err.message}`)
  }
}

module.exports = {createMovie}
