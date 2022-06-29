const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')

router.get('/admin', (req, res) => {
    res.render("loginAdmin")
})
router.post('/loginAdmin', controllers.auth.loginAdmin)
router.get('/adminlistrps', cekLogin, controllers.admin.admin)

router.post('/loginAdmin', controllers.auth.loginAdmin)
router.get('/adminlistrps', cekLogin, controllers.admin.home)
router.get('/adminpengelolaandosen/:id/:name', cekLogin, controllers.admin.adminpengelolaandosen)


module.exports = router