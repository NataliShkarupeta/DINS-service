const path = require("path");
const fs = require("fs/promises");
const { addPictureServ } = require("./pictures.service");
const { pictureDir } = require("../../config");

const addPicture = async (req, res) => {
  console.log(req.file);
  console.log("body", req.body);

  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(pictureDir, originalname);

  try {
    await fs.rename(tempUpload, resultUpload);
    const image = path.join("public", "pictures", originalname);
    const newPicture = {
      ...req.body,
      image,
    };
    

    console.log(newPicture);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newPicture,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
  }

  // const data = await addPictureServ(req);
};

module.exports = { addPicture };
