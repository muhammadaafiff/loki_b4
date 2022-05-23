const express = require("express");
const { json } = require("express/lib/response");
const fs = require("fs")
const pweb = express();
const port = 1234


pweb.listen(port, function() {
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

//materi 6
pweb.get("/materi6", function(req, res) {
    res.send("Menambah RPS")
})

//materi 7
pweb.get("/materi7", function(req, res) {
        res.send("mengubah RPS ")
    })
    //materi 8
pweb.get("/materi8", function(req, res) {
        res.send("Merevisi RPS ")
    })
    //materi 9
pweb.get("/materi9", function(req, res) {
        res.send("Tambah CPMK Kuliah")
    })
    //materi 10
pweb.get("/materi10", function(req, res) {
    res.send("Hapus CPMK Kuliah")
})

//materi 11
pweb.get('/CPMK/hapus', (req, res) => {
    res.send('Masukkan data yang ingin dihapus')
})

//materi 12
pweb.get('/tambah/referensi', (req, res) => {
    res.send('Masukkan data yang ingin ditambah')
})

//materi 13
pweb.get('/ubah/referensi', (req, res) => {
    res.send('Masukkan data yang ingin diubah')
})

//materi 14
pweb.get('/hapus/referensi', (req, res) => {
    res.send('Masukkan data yang ingin dihapus')
})

//materi 15
pweb.get('/menambah/komponen', (req, res) => {
    res.send('Masukkan data yang ingin ditambah')
})

// Muhammad Zaim Milzam 16-19
//materi 16
pweb.put("/mod_eval", function(req, res) {
    //res.send("Ubah komponen penilaian")
    let pesan = {
        message: "",
        mata_kuliah: "Pemograman Web",
        kode: "JSI62125",
        komponen_penilaian: ["Project", "Tugas", "Quiz", "UTS", "UAS"],
        persentase_penilaian: [50, 10, 5, 10, 15],
    };
    res.json(pesan);
    console.log("Komponen penilaian berhasil diubah");
})

//materi 17
pweb.delete("/del_eval", function(req, res) {
    let pesan = {
        message: "Hapus komponen Penilaian",
        mata_kuliah: "Pemograman Web",
        kode: "JSI62125",
        komponen_penilaian: ["Project", "Tugas", "UTS", "UAS"],
        persentase_penilaian: [50, 15, 10, 15],
    };
    res.json(pesan);
    console.log("Komponen penilaian berhasil dihapus")
})

//materi 18
pweb.post("/add_rps", function(req, res) {
    let pesan = {
        message: "Tambah pertemuan mingguan RPS",
        nama_matkul: "Pemrograman Web",
        kode: "JSI62125",
    }
    res.json(pesan)
})

//materi 19
pweb.put("/mod_rps", function(req, res) {
    res.send("Ubah pertemuan mingguan yang ada dalam RPS")
})

//materi 20
pweb.delete('/hapus/pertemuan', (req, res) => {
    res.send('Masukkan pertemuan mingguan dalam RPS yg ingin dihapus')
})

//materi 21
pweb.post('/pencarian/RPS', (req, res) => {
    res.send('Masukkan nama matakuliah atau kode matakuliah yg ingin dicari')
})

//materi 22
pweb.get('/lihat/RPS', (req, res) => {
    res.send('Pilih detail RPS yg ingin dilihat')
})

//materi 23
pweb.get('/eksport/RPS', (req, res) => {
    res.send('Eksport RPS ke dalam file PDF ')
})