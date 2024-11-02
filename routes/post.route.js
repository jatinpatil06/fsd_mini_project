const express = require("express");
const router = express.Router();

const{getPost, getPosts, createPost, updatePost, deletePost} = require("../controllers/post.controller.js");

router.post('/',createPost);
router.delete('/:id',deletePost);
router.get('/:id',getPost);
router.get('/',getPosts);
router.put('/:id',updatePost);

module.exports = router;