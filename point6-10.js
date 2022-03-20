const express = require("express")
const { appendFile } = require("fs")
const materi6sampai10 = express()

materi6sampai10.listen (3000,function(){
    console.log("jalan gesss")
})

materi6sampai10.get("/materi6", function(req,res){
    res.send("menambah RPS ")
})

materi6sampai10.get("/materi7", function(req,res){
    res.send("mengubah RPS ")
})

materi6sampai10.get("/materi8", function(req,res){
    res.send("Revisi RPS ")
})

materi6sampai10.get("/materi9", function(req,res){
    res.send("Menambah CPMK Kuliah")
})

materi6sampai10.get("/materi10", function(req,res){
    res.send("Menghapus CPMK Kuliah")
})