const { Schema, model } = require("mongoose");

const postShema = new Schema({
  title: {
    type: String,
    required: [true, "Set title for post!"],
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
  },
  id: {
    type: String,
  },
  dateStamp:{
    type:Number,
  }
});

exports.Post = model("Post", postShema);