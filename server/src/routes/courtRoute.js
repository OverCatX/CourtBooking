const router = require('express').Router()
const userController = require('../controllers/courtController')

router.get('/', userController.getAllCourts)

module.exports = router