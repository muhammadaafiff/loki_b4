const express = require('express');
const pweb = express();

pweb.get("/login", (req, res) => {
    res.send("Berhasil Terhubung ke Server!!")
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