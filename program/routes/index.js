const test = require('./test.js')
const dosen = require('./dosen.js')
const admin = require('./admin.js')
const mahasiswa = require('./mahasiswa.js')

const server = {}

server.test = test
server.dosen = dosen
server.admin = admin
server.mahasiswa = mahasiswa

module.exports = server