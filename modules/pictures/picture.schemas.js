const { Schema, model } = require("mongoose");

const pictureShema = new Schema(
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
    originalName: {
      type: String,
      required: [true, "Original name is required!"],
      unique: true,
    },
    urlImage: {
      type: String,
      required: [true, "Original name is required!"],
      unique: true,
    },
    titleEn: {
      type: String,
    },
    descriptionsEn: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

exports.Picture = model("picture", pictureShema);
