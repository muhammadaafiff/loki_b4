const controllers = {}

controllers.loginDosen = async (req,res)=>{
    res.render("loginDosen")
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

controllers.tambahkomponennilai = async (req,res)=>{
    res.render("tambahkomponennilai")
}

controllers.tambahpertemuan = async (req,res)=>{
    res.render("tambahpertemuan")
}

controllers.tambahreferensi = async (req,res)=>{
    res.render("tambahreferensi")
}

controllers.tambahCPMK= async (req,res)=>{
    res.render("tambahCPMK")
}

module.exports = controllers 