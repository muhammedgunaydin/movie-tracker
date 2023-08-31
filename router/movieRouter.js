const express = require('express')
const movieController = require('../controllers/movieController')
const upload = require('../upload')

const router = express.Router()
router.post('/',upload.single('image'),movieController.createMovie)
router.get('/',movieController.getAllMovies)
router.get('/:id',movieController.getMovieById)
router.patch('/:id',movieController.updateMovie)
router.delete('/:id',movieController.deleteMovie)
router.post('/watchlist',movieController.addToWatchlist)
router.get('/:userId/watchlist',movieController.getWatchlist)
router.post('/watchlist/remove', movieController.removeFromWatchlist);
router.post('/rate',movieController.rateMovie)

module.exports = router