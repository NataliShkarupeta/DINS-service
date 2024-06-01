const { Post } = require("./posts.model");

const addPostServ = async (req) => {
  const { title, descriptions, titleEn, descriptionsEn } = req.body;
  const newPost = { title, descriptions, titleEn, descriptionsEn };
 
  return Post.create(newPost);
};

const getAllServ = async (req) => {
  return Post.find();
};

const updatePostServ = async (req) => {
  const _id = req.params.id;
  const body = req.body;
  const post = await Post.findById({ _id });

  if (!post) {
    throw new Error("something wrong");
  }
  return Post.findByIdAndUpdate(_id, body, { new: true });
};

const deletePostServ = async (req) => {
  const _id = req.params.id;

  return Post.findByIdAndDelete({ _id });
};

const postByIdServ = async (postId) => {
  try {
    const data = Post.findById(postId);
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPostServ,
  getAllServ,
  updatePostServ,
  deletePostServ,
  postByIdServ,
};
