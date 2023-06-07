const { Post } = require("./posts.model");

const addPostServ = async (req) => {
  const { title, descriptions, titleEn, descriptionsEn } = req.body;
  
  const newPost = { title, descriptions, titleEn, descriptionsEn };
  console.log(newPost);
  return Post.create(newPost);
};

module.exports = { addPostServ };
