const express = require("express");
const multer = require("multer");
const upload = require("../../middelwares/upload");
const { addPicture, listPuctures } = require("./pictures.controller");

const { pictureSchema } = require("./picture.schemas");
const contrWrapper = require("../../middelwares/contWrapper");
const validateBody = require("../../middelwares/validateBody");

const picturesRouter = express.Router();

picturesRouter.post(
  "/",
  upload.single("fileImg"),
  validateBody(pictureSchema),
  contrWrapper(addPicture)
);

picturesRouter.get("/", contrWrapper(listPuctures));

module.exports = picturesRouter;
