const User = require("../models/user.model.js");

//get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//create a user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get a particular user
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.find(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//update a user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = User.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json({ message: "User does not exist." });
        }
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createUser,
};