const { Post } = require("./posts.model");
const { createError } = require("http-errors");

const listPosts = async (req, res) => {
  // return  await Post.find();

 return await res.json({
    status: "success",
    code: 200,
    // data: {
    //   result: posts,
    // },
  });
};

const addPost = async (req, res) => {
  const { body } = req.body;

  return await res.status(201).json({
    status: "success",
    code: 201,
    // data: {
    //   result: post,
    // },
  });
};

const postDelete = async (res, req) => {
  const { id } = req.params;
  // const result=
  //    if(!result){
  //  throw createError(404, `post with id = ${id} not found`);
  //    }
};

const updatePost = async (res, req) => {
  const { id } = req.params;
  const { body } = req.body;
  // const result=
  // if (!result) {
  // throw createError(404, `post with id = ${id} not found`);
  // }
};
const postByID = async (res, req) => {
  const { id } = req.params;
  // if (!result) {
  //  throw createError(404, `post with id = ${id} not found`);
  // }
  return await res.json({
    status: "success",
    code: 200,
    // data: {
    //   result: post,
    // },
  });
};

module.exports = { updatePost, postDelete, addPost, listPosts, postByID };
