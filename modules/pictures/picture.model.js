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
    image: {
      type: String,
      required: [true, "is required!"],
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

exports.Picture = model("picture", pictureModel);
