const express = require("express");
const router = express.Router();

const{getUser, getUsers, createUser, updateUser, deleteUser} = require("../controllers/user.controller.js");

router.post('/',createUser);
router.delete('/:id',deleteUser);
router.get('/:id',getUser);
router.get('/',getUsers);
router.put('/:id',updateUser);

module.exports = router;