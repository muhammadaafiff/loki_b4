
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

controllers.adminLaporan = async (req,res)=>{
    res.render("adminLaporan")
}

controllers.adminLaporan = async (req,res)=>{
    res.render("adminLaporan")
}

controllers.tambahRPS = async (req,res)=>{
    res.render("tambahRPS")
}

controllers.adminmatkuldosen = async (req,res)=>{
    res.render("adminmatkuldosen")
}

module.exports = controllers 