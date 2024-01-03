const { createError } = require("http-errors");
const {
  addPostServ,
  getAllServ,
  updatePostServ,
  deletePostServ,
  postByIdServ,
} = require("./posts.service");

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
  const data = await deletePostServ(req);
  if (!data) {
    res.json({ message: "Not found", status: 404 });
  }
  res.json({ message: "contact deleted" });
};

const postByID = async (req, res) => {
   const data = await postByIdServ(req.params.postId);
   if (!data) {
     return res.json({ message: "Not found", status: 404 });
   }
   return res.json(data);
};




module.exports = { updatePost, postDelete, addPost, listPosts, postByID };
