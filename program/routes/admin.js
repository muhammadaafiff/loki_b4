const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
// const cekLogin = require('../middleware/cekLogin.js')
// const cekAdmin = require('../middleware/cekAdmin.js')

router.get("/akunadmin",controllers.admin.admin)

module.exports = router