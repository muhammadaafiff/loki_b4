const express = require('express');
const pweb = express();

pweb.get("/login", (req, res) => {
    res.send("Berhasil Terhubung ke Server!!")
})

pweb.listen(3000)

pweb.put("/point16", function(req, res) {
    res.send("Ubah komponen penilaian")
})

pweb.delete("/point17", function(req, res) {
    res.send("Hapus komponen penilaian")
})

pweb.post("/point18", function(req, res) {
    res.send("Tambah pertemuan mingguan RPS")
})

pweb.put("/point19", function(req, res) {
    res.send("Ubah pertemuan mingguan yang ada dalam RPS")
})