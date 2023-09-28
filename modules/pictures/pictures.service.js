const { pictureDir } = require("../../config");
const path = require("path");
const fs = require("fs/promises");
const { Picture } = require("./picture.model");

const addPictureServ = async (req) => {
  const { path: tempUpload, originalname } = req.file;
  // console.log("originalname", req.file);
  const image = path.join("pictures", originalname);
  console.log("pictureDir", image);
  const { title1, descriptions } = req.body;
  const resultUpload = path.join(pictureDir, originalname);

  try {
    await fs.rename(tempUpload, resultUpload);

    const newPicture = {
      title1,
      descriptions,
      image,
    };

    return await Picture.create(newPicture);
  } catch (error) {
    // await fs.unlink(tempUpload);
  }
};

const listPucturesServ = async (req) => {
  return await Picture.find();
};

module.exports = { addPictureServ, listPucturesServ };
