const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
// const cekLogin = require('../cekLogin.js')


router.get('/', controllers.auth.landingPage)
router.get('/loginPage', controllers.auth.loginPage)
router.get('/adminLogin', controllers.admin.adminLogin)
router.get('/adminlistrps', controllers.admin.adminlistrps)
router.get('/adminPeta', controllers.admin.adminPeta)
router.get('/adminPersentase', controllers.admin.adminPersentase)
router.get('/adminCetakPersentase', controllers.admin.adminCetakPersentase)
router.get('/adminInfoMatkul', controllers.admin.adminInfoMatkul)
router.get('/adminTambahMatkul', controllers.admin.adminTambahMatkul)
router.get('/adminLaporan',  controllers.admin.adminLaporan)
router.get('/adminDosen',  controllers.admin.adminDosen)
router.get('/adminmatkuldosen',  controllers.admin.adminmatkuldosen)

// router.get('/adminpengelolaandosen/:id/:name',  controllers.admin.adminpengelolaandosen)


module.exports = router