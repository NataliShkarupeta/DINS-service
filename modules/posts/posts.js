const express = require("express");
const validateBody = require("../../middelwares/validateBody");
const { postSchema } = require("./posts.schemas");
const contrWrapper = require("../../middelwares/contWrapper");
const {
  listPosts,
  postByID,
  addPost,
  postDelete,
  updatePost,
} = require("./posts.controller");

const postsRouter = express.Router();

postsRouter.get("/", contrWrapper(listPosts));
postsRouter.patch("/:id", contrWrapper(updatePost));
postsRouter.post("/", validateBody(postSchema), contrWrapper(addPost));
postsRouter.delete("/:id", contrWrapper(postDelete));

module.exports = postsRouter;
