const models = require('../models/index.js')
const controllers = {}
// const models = require('../models/index.js')

controllers.adminLogin = async (req,res)=>{
    res.render("adminLogin")
}

controllers.adminlistrps = async (req,res)=>{
    res.render("adminlistrps")
}

controllers.adminPeta = async (req,res)=>{
    res.render("adminPeta")
}

controllers.adminDosen = async (req,res)=>{
    res.render("adminDosen")
}

controllers.adminLaporan = async (req,res)=>{
    res.render("adminLaporan")
}

controllers.adminPersentase = async(req,res)=>{
    res.render("adminPersentase")
}

controllers.adminCetakPersentase = async(req,res)=>{
    res.render("adminCetakPersentase")
}

controllers.adminInfoMatkul = async(req,res)=>{
    res.render("adminInfoMatkul")
}

controllers.adminTambahMatkul = async(req,res)=>{
    res.render("adminTambahMatkul")
}


controllers.adminTambahRPS = async (req,res)=>{
    res.render("adminTambahRPS")
}

controllers.adminmatkuldosen = async (req,res)=>{
    res.render("adminmatkuldosen")
}

module.exports = controllers 