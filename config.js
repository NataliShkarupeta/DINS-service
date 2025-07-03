const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

let config;

exports.getConfig=()=>{
    if(config){return config}

    dotenv.config({path:path.join(__dirname,"./.env")});

    config = {
      db: {url: process.env.DB_HOST },
      PORT: process.env.PORT,
    };
    return config;
}

const tempDir = path.join(__dirname,"temp");
exports.pictureDir = path.join(__dirname, "public","images");


exports.multerConfig= multer.diskStorage({

destination:(req,file,cb)=>{
 
cb(null, tempDir);
},
filename:(req,file,cb)=>{
  cb(null,file.originalname);
},
limits:{
  fileSize:2048
}

});

