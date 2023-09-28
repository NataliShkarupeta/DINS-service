const express= require('express');
const multer = require('multer');
const upload = require("../../middelwares/upload")
const { addPicture, listPuctures } = require('./pictures.controller');
const { pictures } = require('./pictures.service');
// const validateBody = require('../../middelwares/validateBody');
const {pictureShema}= require("./picture.schemas")

const picturesRouter= express.Router();

picturesRouter.post(
  "/",
  upload.single("fileImg"),
//   validateBody(pictureShema),
  addPicture
);

picturesRouter.get("/",
// async(req,res)=>{res.json(pictures);}
listPuctures
)

module.exports =picturesRouter;




