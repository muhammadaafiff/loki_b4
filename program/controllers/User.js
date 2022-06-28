import User from '../models/User.js';

export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
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
 
// Update product berdasarkan username
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                username : req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product berdasarkan username
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                username : req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
 