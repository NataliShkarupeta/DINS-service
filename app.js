const express = require('express')
const cors = require("cors");
const logger = require('morgan');
const postsRouter = require('./modules/posts/posts');
const picturesRouter = require('./modules/pictures/pictures');

const app= express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());


app.use("/blog", postsRouter);
app.use("/pictures", picturesRouter);
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found", status: "error", code: 404 });
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  if (statusCode === 500) {
    console.log("errroooorrr!!!!!!",err);
  }
  res.status(statusCode).send({
    status: "error",
    massege: err.massege,
    code: statusCode,
  });
});




module.exports= app;