const express = require('express')
const userController = require('../controllers/userController')
const verifyToken = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/getUser/:id', userController.getUserById)
router.get('/profile', verifyToken, (req, res) => {
    const userId = req.user.UserId
  res.send(`Welcome!`)
})

module.exports = router
