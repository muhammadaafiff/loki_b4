const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')
const cekAdmin = require('../middleware/cekAdmin.js')

server.get('/admin', (req, res) => {
    res.render("loginAdmin")
})
server.post('/loginAdmin', controllers.auth.loginAdmin)
server.get('/adminlistrps', cekLogin, controllers.admin.home)

module.exports = router