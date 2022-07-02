const controllers = {}

//login sebagai dosen
controllers.loginDosen = async (req,res)=>{
    res.render("loginDosen")
}

controllers.dosenMatkulDiampu = async(req,res)=>{
    res.render("dosenMatkulDiampu")
}

//menampilkan detail RPS yang diampu dosen
controllers.dosenDetailRPSdiampu = async (req,res)=>{
    res.render("dosenDetailRPSdiampu")
}

controllers.tambahRPS = async (req,res)=>{
    res.render("tambahRPS")
}


controllers.dosenEditKomponenNilai = async (req,res)=>{
    res.render("dosenEditKomponenNilai")
}

// controllers.dosenTambahKomponenNilai = async (req,res)=>{
//     res.render("dosenTambahKomponenNilai")
// }

// controllers.tambahpertemuan = async (req,res)=>{
//     res.render("tambahpertemuan")
// }

controllers.dosenEditPertemuan = async (req,res)=>{
    res.render("dosenEditPertemuan")
}

controllers.dosenEditReferensi = async (req,res) =>{
    res.render('dosenEditReferensi')
}

controllers.tambahreferensi = async (req,res)=>{
    res.render("tambahreferensi")
}

controllers.dosenEditCPMK = async (req,res) =>{
    res.render('dosenEditCPMK')
}

controllers.tambahCPMK= async (req,res)=>{
    res.render("tambahCPMK")
}

module.exports = controllers 