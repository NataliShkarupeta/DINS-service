const { pictureDir } = require("../../config");
const path = require("path");
const fs = require("fs/promises");
const { Picture } = require("./picture.model");

const addPictureServ = async (req) => {
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(pictureDir, originalname);


  const image = path.join("pictures", originalname);
  const { title1, descriptions, TitleEn, descriptionsEn } = req.body;

  try {
    await fs.rename(tempUpload, resultUpload);

    const newPicture = {
      title1,
      descriptions,
      TitleEn,
      descriptionsEn,
      image,
    };
   
    return  Picture.create(newPicture);
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

const listPucturesServ = async (req) => {
  return await Picture.find();
};

module.exports = { addPictureServ, listPucturesServ };
