// const { Model } = require("sequelize/types")
const models = require('../models/index.js')
const controllers = {}

controllers.loginAdmin = async (req, res) => {
    res.render("loginAdmin")
}

controllers.landingPage = async (req, res) => {
    const rps = await models.course_plans.findAll({
        
    })
    res.render("landingPage")
}

controllers.loginPage = async (req, res) => {
    res.render("loginPage")
}

controllers.adminPeta = async (req,res)=>{
    res.render("adminPeta")
}

controllers.adminDosen = async (req,res)=>{
    res.render("adminDosen")
}

controllers.loginDosen = async (req,res)=>{
    res.render("loginDosen")
}

controllers.adminLaporan = async (req,res)=>{
    res.render("adminLaporan")
}

controllers.adminLaporan = async (req,res)=>{
    res.render("adminLaporan")
}

controllers.RPSdiampu = async (req,res)=>{
    res.render("RPSdiampu")
}

controllers.DetailRPSdiampu = async (req,res)=>{
    res.render("DetailRPSdiampu")
}

controllers.tambahRPS = async (req,res)=>{
    res.render("tambahRPS")
}

// controllers.mahasiswaDetailRPS = async (req, res) => {
//     res.render("mahasiswaDetailRPS")
// }


module.exports = controllers