const dosen = require('./dosen.js')
const admin = require('./admin.js')
const mahasiswa = require('./mahasiswa.js')


const server = {}

server.dosen = dosen
server.admin = admin
server.mahasiswa = mahasiswa

module.exports = server