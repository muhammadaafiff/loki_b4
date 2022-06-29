const test = require ("./test.js")
const admin = require ("./admin.js")
const auth = require('./auth.js')
const dosen = require('./dosen.js')
const mahasiswa = require('./mahasiswa.js')

const controllers = {}

controllers.test = test
controllers.admin = admin
controllers.auth = auth
controllers.dosen = dosen
controllers.mahasiswa = mahasiswa

module.exports = controllers    