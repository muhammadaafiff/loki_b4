const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
// const cekLogin = require('../cekLogin.js')

router.get('/mahasiswaDetailRPS', controllers.mahasiswa.mahasiswaDetailRPS)


module.exports = router