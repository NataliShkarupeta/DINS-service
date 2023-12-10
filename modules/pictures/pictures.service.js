const { pictureDir } = require("../../config");
const path = require("path");
const fs = require("fs/promises");
const { Picture } = require("./picture.model");

const addPictureServ = async (req) => {
  console.log(req.body);
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(pictureDir, originalname);


  const image = path.join("images", originalname);
  const { title1, descriptions, TitleEn, descriptionsEn, inStock,inStockEn,size } = req.body;
   
  try {
    await fs.rename(tempUpload, resultUpload);

    const newPicture = {
      title1,
      descriptions,
      TitleEn,
      descriptionsEn,
      image,
      inStock,
      inStockEn,
      size,
    };
   console.log(newPicture)
    return  Picture.create(newPicture);
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

const listPucturesServ = async (req) => {
  return await Picture.find();
};

const picturesInStockServ = async (req) => {
  return await Picture.find({inStock:'так'});
};




const pictureByIdServ = async (paintingId) => {
 
  try {
    
    const data = Picture.findById(paintingId);
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPictureServ,
  listPucturesServ,
  pictureByIdServ,
  picturesInStockServ,
};
