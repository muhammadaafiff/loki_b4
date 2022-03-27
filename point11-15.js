const express = require('express')
const server = express()
const port = 7697

server.listen(port, function(){
    console.log('MATERI 11-15')
})

server.get('/', (req, res) =>{
    res.send('SELAMAT DATANG DI SERVER KAMI')
})

//materi 11
server.delete('/CPMK/hapus', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 12
server.post('/tambah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

//materi 13
server.put('/ubah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin diubah')
})

//materi 14
server.delete('/hapus/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 15
server.post('/menambah/komponen', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

