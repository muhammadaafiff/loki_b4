const express = require("express")
const { appendFile } = require("fs")
const pweb = express();
const port = 1234

pweb.listen (port,function(){
    console.log("materi 6-10")
})

pweb.post("/materi6", function(req,res){
    res.send("Menambah RPS")
})

pweb.put("/materi7", function(req,res){
    res.send("mengubah RPS ")
})

pweb.put("/materi8", function(req,res){
    res.send("Merevisi RPS ")
})

pweb.post("/materi9", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

pweb.put("/materi10", function(req,res){
    res.send("Ubah CPMK kuliah")
})