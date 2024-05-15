const { pictureDir } = require("../../config");
const path = require("path");
const fs = require("fs/promises");
const { Picture } = require("./picture.model");
const nodemailer = require("nodemailer");

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
    return Picture.create(newPicture);
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

const listPucturesServ = async (req) => {
  const { limit = 4, skip = 0 } = req.query;
  return await Picture.find({}).limit(parseInt(limit)).skip(parseInt(skip));
};

const picturesInStockServ = async (req) => {
  return await Picture.find({ inStock: "так" });
};

const picturesPlacesServ = async (req) => {
  const data = await Picture.find({
    $or: [{ "place.pl": req.body.spot }, { "placeEn.pl": req.body.spot }],
  });
  return data;
};

const sendOrderServ = async (req) => {
  const {
    Замовляю = "Купляю",
    tit,
    selectedSize = "(якщо купляю розмір фіксований)",
    adress,
  } = req.body;

  let massage = `${Замовляю} картину ${tit} розміром ${selectedSize}. Моя адреса: ${adress}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.NDM,
    },
  });
  const mailOptions = {
    from: "natalinardi.kh@gmail.com",
    to: "natalinardi.kh@gmail.com",
    subject: "Замовлення!!!",
    text: massage,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return error;
    } else {
      console.error("successfully");
      return `Email sent successfully!`;
    }
  });
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
  sendOrderServ,
};
