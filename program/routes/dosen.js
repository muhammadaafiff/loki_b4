const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
// const cekLogin = require('../cekLogin.js')

// router.get('/loginDosen', (req, res) => {
//     res.render("loginDosen")
// })

router.get('/dosenLogin', controllers.dosen.dosenLogin)
router.get('/dosenMatkulDiampu', controllers.dosen.dosenMatkulDiampu)
router.get('/dosenDetailRPSdiampu', controllers.dosen.dosenDetailRPSdiampu)
router.get('/dosenEditKomponenNilai', controllers.dosen.dosenEditKomponenNilai)
router.get('/dosenEditPertemuan', controllers.dosen.dosenEditPertemuan)
router.get('/dosenTambahKomponenNilai', controllers.dosen.dosenTambahKomponenNilai)
router.get('/dosenTambahRPS', controllers.dosen.dosenTambahRPS)
router.get('/dosenTambahPertemuan', controllers.dosen.dosenTambahPertemuan)
router.get('/dosenEditReferensi', controllers.dosen.dosenEditReferensi)
router.get('/dosenTambahReferensi', controllers.dosen.dosenTambahReferensi)
router.get('/dosenEditCPMK',controllers.dosen.dosenEditCPMK)
router.get('/dosenTambahCPMK', controllers.dosen.dosenTambahCPMK)


module.exports = router