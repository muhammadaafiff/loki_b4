const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index.js')

// import { 
//     createUser,
//     deleteUser,
//     getUser,
//     updateUser,
//  } from "../controllers/User.js";
 
 
router.get('/users', controllers);
router.post('/users', createUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);
 
module.exports = router