const controllers = {}


controllers.dosenForm = async (req, res) => {
    res.render("dosenForm")
}

controllers.dosenMatkulDiampu = async(req,res)=>{
    res.render("dosenMatkulDiampu")
}

controllers.dosenDetailRPSdiampu = async (req,res)=>{
    res.render("dosenDetailRPSdiampu")
}

controllers.dosenTambahRPS = async (req,res)=>{
    res.render("dosenTambahRPS")
}

controllers.dosenEditKomponenNilai = async (req,res)=>{
    res.render("dosenEditKomponenNilai")
}

controllers.dosenTambahKomponenNilai = async (req,res)=>{
    res.render("dosenTambahKomponenNilai")
}

controllers.dosenTambahPertemuan = async (req,res)=>{
    res.render("dosenTambahPertemuan")
}

controllers.dosenEditPertemuan = async (req,res)=>{
    res.render("dosenEditPertemuan")
}

controllers.dosenEditReferensi = async (req,res) =>{
    res.render('dosenEditReferensi')
}

controllers.dosenTambahReferensi = async (req,res)=>{
    res.render("dosenTambahReferensi")
}

controllers.dosenEditCPMK = async (req,res) =>{
    res.render('dosenEditCPMK')
}

controllers.dosenTambahCPMK= async (req,res)=>{
    res.render("dosenTambahCPMK")
}

module.exports = controllers 