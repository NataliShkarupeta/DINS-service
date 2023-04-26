const { Post } = require("./posts.model")

const listPosts= async(req,res,next)=>{
    // return  await Post.find();
  
    res.json('qwe-qwe')
}


module.exports = { listPosts };