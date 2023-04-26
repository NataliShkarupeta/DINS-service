const express= require("express");
const { listPosts } = require("./posts.controller");

const postController = express.Router();

postController.get("/",listPosts)

module.exports= postController;