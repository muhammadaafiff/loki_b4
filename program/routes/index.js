// var express = require('express');
// var router = express.Router();
const test=require ("./test.js")
const admin=require ("./admin.js")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const router = {}

router.test=test
router.admin=admin

module.exports = router;

