const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')

router.get("/login",controllers.test.test)

module.exports = router