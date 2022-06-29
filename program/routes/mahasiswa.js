const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')


router.get('/rpsPemrogramanWeb', controllers.mahasiswa.rpsPemrogramanWeb)

module.exports = router