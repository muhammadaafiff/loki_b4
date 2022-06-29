
const controllers = {}

controllers.admin = async (req,res)=>{
    res.render("adminlistrps")
}

controllers.home = async (req,res)=>{
    res.render("adminlistrps")
}

controllers.landingPage = async (req,res)=>{
    res.render("landingPage")
}

controllers.loginPage = async (req,res)=>{
    res.render("loginPage")
}

controllers.adminPeta = async (req,res)=>{
    res.render("adminPeta")
}

controllers.adminDosen = async (req,res)=>{
    res.render("adminDosen")
}

module.exports = controllers 