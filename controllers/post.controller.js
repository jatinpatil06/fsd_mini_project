const Post = require("../models/post.model.js");

//get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//create a post
const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json(post);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get a particular post
const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.find(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//update a post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body);
        if (!post) {
            return res.status(400).json({ message: "Post not found." });
        }
        const updatedPost = await Comment.findById(id);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = Post.findByIdAndDelete(id);
        if (!post) {
            res.status(404).json({ message: "Post does not exist." });
        }
        res.status(200).json({ message: "Post deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPost,
    getPosts,
    updatePost,
    deletePost,
    createPost,
};