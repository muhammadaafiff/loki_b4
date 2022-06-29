const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')

router.get('/loginDosen', (req, res) => {
    res.render("loginDosen")
})

router.get('/loginDosen', controllers.auth.loginDosen)

module.exports = router