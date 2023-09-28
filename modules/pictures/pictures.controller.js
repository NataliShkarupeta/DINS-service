// const { v4: uuidv4 } = require("uuid");
// const path = require("path");
// const fs = require("fs/promises");
const { addPictureServ, listPucturesServ } = require("./pictures.service");
// const { pictureDir } = require("../../config");

const addPicture = async (req, res) => {
  const data = await addPictureServ(req);

return  res.status(201).json({
     status: "success",
     code: 201,
     data: {
       result: data
     },
   });

};

const listPuctures= async(req,res)=>{
 const data = await listPucturesServ(req);
  return await res.json({
    status: "success",
    code: 200,
    data: {
      result: data,
    },
  });
}


module.exports = { addPicture, listPuctures };
