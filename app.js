const express = require('express')
const cors = require("cors");
const logger = require('morgan');
const postController = require('./modules/posts/posts');

const app= express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.get("/",(req,res)=>{
//     // console.log("req.url",req.url);
//     //   console.log("req.method",req.method);
//     //   console.log("req.headers", req.headers);
//       res.send('qweqwqe56')
// })


app.use("/blog",postController);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});




module.exports= app;