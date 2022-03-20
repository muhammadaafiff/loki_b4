const express = require('express')
const server = express()
const port = 3000

server.listen(port, function(){
    console.log('MATERI 20-23')
})

server.get('/', (req, res) =>{
    res.send('Berhasil Terhubung ke Server!!')
})

//materi 20
server.get('/hapus/pertemuan', (req, res)=>{
    res.send('Masukkan pertemuan mingguan dalam RPS yg ingin dihapus')
})

//materi 21
server.get('/pencarian/RPS', (req, res)=>{
    res.send('Masukkan nama matakuliah atau kode matakuliah yg ingin dicari')
})

//materi 22
server.get('/lihat/RPS', (req, res)=>{
    res.send('Pilih detail RPS yg ingin dilihat')
})

//materi 23
server.get('/eksport/RPS', (req, res)=>{
    res.send('Eksport RPS ke dalam file PDF ')
})

