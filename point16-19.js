const express = require('express');
const point16_19 = express();

point16_19.get("/", (req, res) => {
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