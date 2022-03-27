const express = require("express")
const { appendFile } = require("fs")
const pweb = express();
const port = 1234

pweb.listen (port,function(){
    console.log("materi 6-10")
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