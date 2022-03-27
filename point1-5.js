const express = require('express');
const pweb = express();
const port = 3000

pweb.listen (port, function(){
    console.log("point1-5")
})

pweb.post("/signup", (req, res) => {
    res.send("Yeay Anda Berhasil Terhubung ke Server!!")
})

pweb.get("/login", (req, res) => {
    res.send("Yeay Anda Berhasil Terhubung ke Server!!")
})

pweb.get("/point2", function(req, res) {
    res.send("Anda sudah Logout")
})

pweb.put("/point3", function(req, res) {
    res.send("Tambah / Perbaharui RPS")
})

pweb.post("/point4", function(req, res) {
    res.send("Admin dapat melihat laporan terkait RPS yang ad pertemuan mingguan yang ada dalam RPS")
})

pweb.get("/point5", function(req, res) {
    res.send("Admin dapat mencetak laporan terkai pertemuan mingguan yang ada dalam RPS")
})