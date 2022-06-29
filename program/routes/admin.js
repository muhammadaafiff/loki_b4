const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
const cekLogin = require('../middleware/cekLogin.js')

router.get('/admin', (req, res) => {
    res.render("landingPage")
})

router.get('/', controllers.auth.landingPage)
router.get('/loginPage', controllers.auth.loginPage)
router.get('/adminPeta', controllers.auth.adminPeta)
router.get('/adminDosen', controllers.auth.adminDosen)
router.get('/adminlistrps',  controllers.admin.admin)
router.get('/adminLaporan',  controllers.admin.adminLaporan)
router.get('/adminDosen',  controllers.admin.adminDosen)

// router.get('/adminlistrps', controllers.admin.home)
// router.get('/adminpengelolaandosen/:id/:name',  controllers.admin.adminpengelolaandosen)


module.exports = router