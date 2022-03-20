const express = require('express');
const point1_5 = express();

point1_5.listen(3000)

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