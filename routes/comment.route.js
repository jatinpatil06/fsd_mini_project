const express = require("express");
const router = express.Router();

const{getComment, getComments, createComment, updateComment, deleteComment} = require("../controllers/comment.controller.js");

router.post('/',createComment);
router.delete('/:id',deleteComment);
router.get('/:id',getComment);
router.get('/',getComments);
router.put('/:id',updateComment);

module.exports = router;