const express = require("express")
const { appendFile } = require("fs")
const pweb = express();
const port = 1234


pweb.listen (port, function(){
    console.log("point1-23")
})

pweb.get("/login", (req, res) => {
    res.send("Yeay Anda Berhasil Terhubung ke pweb!!")
})


pweb.get("/point2", function(req, res) {
    res.send("Anda sudah Logout")
})

pweb.get("/point3", function(req, res) {
    res.send("Tambah / Perbaharui RPS")
})

pweb.get("/point4", function(req, res) {
    res.send("Admin dapat melihat laporan terkait RPS yang ad pertemuan mingguan yang ada dalam RPS")
})

pweb.get("/point5", function(req, res) {
    res.send("Admin dapat mencetak laporan terkai pertemuan mingguan yang ada dalam RPS")
})

pweb.get("/materi6", function(req,res){
    res.send("Menambah RPS")
})

pweb.get("/materi7", function(req,res){
    res.send("mengubah RPS ")
})

pweb.get("/materi8", function(req,res){
    res.send("Merevisi RPS ")
})

pweb.get("/materi9", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

pweb.get("/materi10", function(req,res){
    res.send("Hapus CPMK Kuliah")
})

pweb.get('/', (req, res) =>{
    res.send('SELAMAT DATANG DI pweb KAMI')
})

//materi 11
pweb.get('/CPMK/hapus', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 12
pweb.get('/tambah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

//materi 13
pweb.get('/ubah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin diubah')
})

//materi 14
pweb.get('/hapus/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 15
pweb.get('/menambah/komponen', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

pweb.get("/login", (req, res) => {
    res.send("Berhasil Terhubung ke pweb!!")
})

pweb.listen(3000)

pweb.get("/point16", function(req, res) {
    res.send("Ubah komponen penilaian")
})

pweb.get("/point17", function(req, res) {
    res.send("Hapus komponen penilaian")
})

pweb.get("/point18", function(req, res) {
    res.send("Tambah pertemuan mingguan RPS")
})

pweb.get("/point19", function(req, res) {
    res.send("Ubah pertemuan mingguan yang ada dalam RPS")
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

