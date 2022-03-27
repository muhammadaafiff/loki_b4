const express = require('express')
const pweb = express()
const port = 7697

pweb.listen(port, function(){
    console.log('MATERI 11-15')
})

pweb.get('/', (req, res) =>{
    res.send('SELAMAT DATANG DI SERVER KAMI')
})

//materi 11
pweb.delete('/CPMK/hapus', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 12
pweb.post('/tambah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

//materi 13
pweb.put('/ubah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin diubah')
})

//materi 14
pweb.delete('/hapus/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 15
pweb.post('/menambah/komponen', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

