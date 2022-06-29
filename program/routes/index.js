const test=require ("./test.js")
const admin=require ("./admin.js")

const router = {}

router.test=test
router.admin=admin

module.exports = router;

