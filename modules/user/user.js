const express = require("express");
const { addUser, getUsers } = require("./user.controller");

const router = express.Router();

router.post("/", addUser);
router.get("/", getUsers);

module.exports = router;
