const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/',  userController.getAllUsers)
router.post('/', userController.createAccount)
router.post('/login', userController.login)

module.exports = router