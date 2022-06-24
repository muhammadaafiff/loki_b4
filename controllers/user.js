// Import model user
import User from "../models/User.js";
 
// Get semua user
export const getUsers = async (req, res) => {
    try {
        const User = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}
 
// Get user berdasarkan id
export const getUserById = async (req, res) => {
    try {
        const User = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(User[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create user baru
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update user berdasarkan id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete user berdasarkan id
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}