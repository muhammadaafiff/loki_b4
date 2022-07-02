const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
// const cekLogin = require('../cekLogin.js')

// router.get('/loginDosen', (req, res) => {
//     res.render("loginDosen")
// })

router.get('/loginDosen', controllers.auth.loginDosen)
router.get('/dosenMatkulDiampu', controllers.dosen.dosenMatkulDiampu)
router.get('/dosenDetailRPSdiampu', controllers.dosen.dosenDetailRPSdiampu)
router.get('/dosenEditKomponenNilai', controllers.dosen.dosenEditKomponenNilai)
router.get('/dosenEditPertemuan', controllers.dosen.dosenEditPertemuan)
// router.get('/tambahpertemuan', controllers.dosen.tambahpertemuan)
router.get('/dosenEditReferensi', controllers.dosen.dosenEditReferensi)
// router.get('/tambahreferensi', controllers.dosen.tambahreferensi)
router.get('/dosenEditCPMK',controllers.dosen.dosenEditCPMK)
// router.get('/tambahCPMK', controllers.dosen.tambahCPMK)


module.exports = router