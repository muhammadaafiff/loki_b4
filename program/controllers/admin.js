const controllers = {}
const models = require('../models/index.js')

controllers.landingPage = async (req,res)=>{
    const RPS =await models.course_plans.findAll({})
    res.render("landingPage")
}

controllers.admin = async (req,res)=>{
    res.render("adminlistrps")
}

//admin membuat laporan peta CPMK
controllers.adminPeta = async (req,res)=>{
    res.render("adminPeta")
}

// admin menambahkan dosen
controllers.adminDosen = async (req,res)=>{
    res.render("adminDosen")
}

//admin membuat laporan
controllers.adminLaporan = async (req,res)=>{
    res.render("adminLaporan")
}

//admin membuat laporan persentase
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