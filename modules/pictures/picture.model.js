const { Schema, model } = require("mongoose");

const pictureModel = new Schema(
  {
    title1: {
      type: String,
      required: [true, "Set title for post!"],
      minlength: 3,
      unique: true,
    },
    descriptions: {
      type: String,
    },
    TitleEn: {
      type: String,
    },
    descriptionsEn: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "is required!"],
      unique: true,
    },
    inStock: {
      type: String,
      required: [true, "is required!"],
    },
    inStockEn: {
      type: String,
      required: [true, "is required!"],
    },
    place: {
      type: Array,
    },
    placeEn: {
      type: Array,
    },
    size: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

exports.Picture = model("picture", pictureModel);
