const test = require ("./test.js")
const admin = require ("./admin.js")

const controllers = {}

controllers.test = test
controllers.admin = admin

module.exports = controllers