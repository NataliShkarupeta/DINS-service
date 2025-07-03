const express = require("express");
const { addUser, getUsers } = require("./user.controller");

const router = express.Router();

// POST /feedback
router.post("/", addUser);
router.get("/", getUsers);

module.exports = router;
