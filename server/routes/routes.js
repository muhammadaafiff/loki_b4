// Import express
import express from "express";
// Import Controller user
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../server/controllers/User.js.js.js.js.js.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua user
router.get('/users', getUsers);
// Route get user by id
router.get('/users/:id', getUserById);
// Route create user baru
router.post('/users', createUser);
// Route update user by id
router.put('/users/:id', updateUser);
// Route delete user by id
router.delete('/users/:id', deleteUser);
 
// export router
export default router;