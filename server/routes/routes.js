import express from "express";
import { 
    createUser,
    deleteUser,
    getUser,
    updateUser,
 } from "../controllers/User.js";
 
const router = express.Router();
 
router.get('/users', getUser);
router.post('/users', createUser);
router.put('/users', updateUser);
router.delete('/users', deleteUser);
 
export default router;