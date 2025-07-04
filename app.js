const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const postsRouter = require("./modules/posts/posts");
const picturesRouter = require("./modules/pictures/pictures");
const userRouter = require("./modules/user/user");
require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/blog", postsRouter);
app.use("/pictures", picturesRouter);
app.use(express.static("public"));
app.use("/feedback", userRouter);

app.use("/check-secret", (req, res) => {
  const { secret } = req.body;
  if (!secret) {
    return res.status(400).json({ message: "Secret is required" });
  }

  if (secret.toUpperCase() === process.env.SECRET_KEY?.toUpperCase()) {
    return res.json({ authorized: true });
  } else {
    return res
      .status(401)
      .json({ authorized: false, message: "Invalid secret key" });
  }
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "React app URL");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found", status: "error", code: 404 });
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  if (statusCode === 500) {
    console.log("errroooorrr!!!!!!", err);
  }
  res.status(statusCode).send({
    status: "error",
    massege: err.massege,
    code: statusCode,
  });
});

module.exports = app;
