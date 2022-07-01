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

controllers.loginDosen = async (req,res)=>{
    res.render("loginDosen")
}


// controllers.mahasiswaDetailRPS = async (req, res) => {
//     res.render("mahasiswaDetailRPS")
// }


module.exports = controllers