
const controllers = {}

controllers.home = async(req, res) => {
    const accessToken = req.cookies.accessToken 
     if (!accessToken)
         return res.status(200).json("tidak ada token")
     const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
     const id = payload.id
     const nama = payload.nama
     const NIP = payload.NIP
 
     const RPS = await models.course_plans.findAll({
         atribute : ['rev', 'code', 'name', 'credit', 'semester']
     })
     res.render("adminlistrps", {RPS, accessToken, nama, NIP} )
     // res.json({RPS})
 }

controllers.admin = async (req,res)=>{
    res.render("akunadmin")
}

module.exports = controllers 