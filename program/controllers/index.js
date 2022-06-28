const test = require ("./test.js")
const admin = require ("./admin.js")
const auth = require('./auth.js')

const controllers = {}

controllers.test = test
controllers.admin = admin
controllers.auth = auth

module.exports = controllers    