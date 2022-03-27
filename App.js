const express = require('express')
const app = express()
const port = 3000

point1_23.listen (port, function(){
    console.log("point1-23")
})

point1_5.get("/login", (req, res) => {
    res.send("Yeay Anda Berhasil Terhubung ke Server!!")
})


point1_5.get("/point2", function(req, res) {
    res.send("Anda sudah Logout")
})

point1_5.get("/point3", function(req, res) {
    res.send("Tambah / Perbaharui RPS")
})

point1_5.get("/point4", function(req, res) {
    res.send("Admin dapat melihat laporan terkait RPS yang ad pertemuan mingguan yang ada dalam RPS")
})

point1_5.get("/point5", function(req, res) {
    res.send("Admin dapat mencetak laporan terkai pertemuan mingguan yang ada dalam RPS")
})

materi6sampai10.get("/materi6", function(req,res){
    res.send("Menambah RPS")
})

materi6sampai10.get("/materi7", function(req,res){
    res.send("mengubah RPS ")
})

materi6sampai10.get("/materi8", function(req,res){
    res.send("Merevisi RPS ")
})

materi6sampai10.get("/materi9", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

materi6sampai10.get("/materi10", function(req,res){
    res.send("Hapus CPMK Kuliah")
})

server.get('/', (req, res) =>{
    res.send('SELAMAT DATANG DI SERVER KAMI')
})

//materi 11
server.get('/CPMK/hapus', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 12
server.get('/tambah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

//materi 13
server.get('/ubah/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin diubah')
})

//materi 14
server.get('/hapus/referensi', (req, res)=>{
    res.send('Masukkan data yang ingin dihapus')
})

//materi 15
server.get('/menambah/komponen', (req, res)=>{
    res.send('Masukkan data yang ingin ditambah')
})

point16_19.get("/login", (req, res) => {
    res.send("Berhasil Terhubung ke Server!!")
})

point16_19.listen(3000)

point16_19.get("/point16", function(req, res) {
    res.send("Ubah komponen penilaian")
})

point16_19.get("/point17", function(req, res) {
    res.send("Hapus komponen penilaian")
})

point16_19.get("/point18", function(req, res) {
    res.send("Tambah pertemuan mingguan RPS")
})

point16_19.get("/point19", function(req, res) {
    res.send("Ubah pertemuan mingguan yang ada dalam RPS")
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

