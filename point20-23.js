const express = require('express')
const pweb = express()
const port = 3000

pweb.listen(port, function(){
    console.log('MATERI 20-23')
})

pweb.get('/', (req, res) =>{
    res.send('Berhasil Terhubung ke pweb!!')
})

//materi 20
pweb.get('/hapus/pertemuan', (req, res)=>{
    res.send('Masukkan pertemuan mingguan dalam RPS yg ingin dihapus')
})

//materi 21
pweb.get('/pencarian/RPS', (req, res)=>{
    res.send('Masukkan nama matakuliah atau kode matakuliah yg ingin dicari')
})

//materi 22
pweb.get('/lihat/RPS', (req, res)=>{
    res.send('Pilih detail RPS yg ingin dilihat')
})

//materi 23
pweb.get('/eksport/RPS', (req, res)=>{
    res.send('Eksport RPS ke dalam file PDF ')
})

