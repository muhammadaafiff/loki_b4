const controllers = {}
// const models = require('../models/index.js')


controllers.admin = async (req,res)=>{
    res.render("adminlistrps")
}

controllers.adminForm = async (req,res)=>{
    res.render("adminForm")
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

controllers.tambahRPS = async (req,res)=>{
    res.render("tambahRPS")
}

controllers.adminmatkuldosen = async (req,res)=>{
    res.render("adminmatkuldosen")
}

module.exports = controllers 