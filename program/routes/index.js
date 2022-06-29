const test=require ("./test.js")
const admin=require ("./admin.js")
const dosen=require ("./dosen.js")

const router = {}

router.test=test
router.admin=admin
router.dosen=dosen

module.exports = router;

