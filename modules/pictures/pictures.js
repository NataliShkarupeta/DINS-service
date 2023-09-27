const express= require('express');
const multer = require('multer');
const upload = require("../../middelwares/upload")
const { addPicture } = require('./pictures.controller');

const picturesRouter= express.Router();

picturesRouter.post("/", upload.single("fileImg"),
 addPicture
// async(req,res)=>{
//     console.log(req.file)
// }
 );

module.exports =picturesRouter;




