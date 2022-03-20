const express = require("express")
const { appendFile } = require("fs")
const materi6sampai10 = express();
const port = 1234

materi6sampai10.listen (port,function(){
    console.log("materi 6-10")
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