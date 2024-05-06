const express = require("express");
const multer = require("multer");
const upload = require("../../middelwares/upload");
const {
  addPicture,
  listPuctures,
  pictureById,
  picturesInStock,
  picturesPlaces,
  updatePictureInfo,
  pictureDelete,
  sendOrder,
} = require("./pictures.controller");

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
picturesRouter.patch("/:id", contrWrapper(updatePictureInfo));
picturesRouter.get("/inStock", contrWrapper(picturesInStock));
picturesRouter.post("/place", contrWrapper(picturesPlaces));
picturesRouter.post("/order", sendOrder);
picturesRouter.delete("/:id", contrWrapper(pictureDelete));

picturesRouter.get("/:paintingId", contrWrapper(pictureById));

module.exports = picturesRouter;
