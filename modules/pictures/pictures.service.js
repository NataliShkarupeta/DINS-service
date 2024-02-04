const { pictureDir } = require("../../config");
const path = require("path");
const fs = require("fs/promises");
const { Picture } = require("./picture.model");

const updatePictureInfoServ = async (req) => {
  const _id = req.params.id;
  const body = req.body;
  const picture = await Picture.findById({ _id });

  if (!picture) {
    throw new Error("something wrong");
  }

  return Picture.findByIdAndUpdate(_id, body, { new: true });
};

const addPictureServ = async (req) => {
  // console.log(req.body);
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(pictureDir, originalname);

  const image = path.join("images", originalname);
  const {
    title1,
    descriptions,
    TitleEn,
    descriptionsEn,
    inStock,
    inStockEn,
    size,
    place,
    placeEn,
  } = req.body;

  const places = place.split(",");
  let placesOb = places.map((place) => ({
    pl: place,
  }));
  const placesEn = placeEn.split(",");
  let placesObEn = placesEn.map((place) => ({
    pl: place,
  }));

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
      place: placesOb,
      placeEn: placesObEn,
      size,
    };

    console.log(newPicture);
    return Picture.create(newPicture);
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

const listPucturesServ = async (req) => {
  return await Picture.find();
};

const picturesInStockServ = async (req) => {
  return await Picture.find({ inStock: "так" });
};

const picturesPlacesServ = async (req) => {
  // const query = Picture.where(
  //   { "place.pl": req.body.spot } || { "placeEn.pl": req.body.spot }
  // );
  // console.log("query", req.body.spot);
  // const data = await query.find();
const data = await Picture.find({
  $or: [{ "place.pl": req.body.spot }, { "placeEn.pl": req.body.spot }],
});
 //   // $or: [{ place: { $elemMatch: { place: `${spot}` } } }, { inStock: "ні" }],
  // });
  return data;
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
const pictureDeleteServ = async (req) => {
  const _id = req.params.id;

  return Picture.findByIdAndDelete({ _id });
};

module.exports = {
  addPictureServ,
  listPucturesServ,
  pictureByIdServ,
  picturesInStockServ,
  picturesPlacesServ,
  updatePictureInfoServ,
  pictureDeleteServ,
};
