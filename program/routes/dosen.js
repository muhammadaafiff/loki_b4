const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')
// const cekLogin = require('../cekLogin.js')

// router.get('/loginDosen', (req, res) => {
//     res.render("loginDosen")
// })

router.get('/loginDosen', controllers.auth.loginDosen)
router.get('/RPSdiampu', controllers.auth.RPSdiampu)
router.get('/DetailRPSdiampu', controllers.auth.DetailRPSdiampu)
router.get('/tambahRPS', controllers.auth.tambahRPS)
router.get('/tambahkomponennilai', controllers.dosen.tambahkomponennilai)
router.get('/tambahpertemuan', controllers.dosen.tambahpertemuan)
router.get('/tambahreferensi', controllers.dosen.tambahreferensi)
router.get('/tambahCPMK', controllers.dosen.tambahCPMK)


module.exports = router