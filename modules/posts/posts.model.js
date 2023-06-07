const { Schema, model } = require("mongoose");

const postShema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for post!"],
      minlength: 3,
      unique: true,
    },
    descriptions: {
      type: String,
      required: [true, "You can't send empty post!"],
    },
    titleEn: {
      type: String,
    },
    descriptionsEn: {
      type: String,
    }
  },
  { versionKey: false, timestamps: true }
);

exports.Post = model("post", postShema);