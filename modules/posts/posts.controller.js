const { createError } = require("http-errors");
const { addPostServ, getAllServ, updatePostServ } = require("./posts.service");

const listPosts = async (req, res) => {
  const data = await getAllServ(req);

  return await res.json({
    status: "success",
    code: 200,
    data: {
      result: data,
    },
  });
};

const addPost = async (req, res) => {
  const data = await addPostServ(req);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: data,
    },
  });
};

const updatePost = async (req, res) => {
  const data = await updatePostServ(req);

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: data,
    },
  });
};

const postDelete = async (req, res) => {
  const { _id } = req.params;
  // const result=
  //    if(!result){
  //  throw createError(404, `post with id = ${id} not found`);
  //    }
};

const postByID = async (req, res) => {
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
