
const controllers = {}

controllers.loginAdmin = async (req, res) => {
    res.render("loginAdmin")
}

controllers.landingPage = async (req, res) => {
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





module.exports = controllers