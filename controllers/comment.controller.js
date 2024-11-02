const Comment = require("../models/comment.model.js");

//get all comments
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//create a comment
const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get a particular comment
const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.find(id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//update a comment
const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndUpdate(id, req.body);
        if (!comment) {
            return res.status(400).json({ message: "Comment not found." });
        }
        const updatedComment = await Comment.findById(id);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete a book
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = Comment.findByIdAndDelete(id);
        if (!comment) {
            res.status(404).json({ message: "Comment does not exist." });
        }
        res.status(200).json({ message: "Comment deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getComment,
    getComments,
    updateComment,
    deleteComment,
    createComment,
};