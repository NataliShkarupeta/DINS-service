const { createError } = require("http-errors");
const { addPostServ, getAllServ } = require("./posts.service");

const listPosts = async (req, res) => {
  const data = await getAllServ(req)

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

const postDelete = async (res, req) => {
  const { _id } = req.params;
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
