const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    phone: { type: String, required: true, unique: true },
    name: { type: String },
    nameEn: { type: String },
    gender: { type: String },
    genderEn: { type: String },
    feedback: { type: String },
    feedbackEn: { type: String },
    date: { type: String },
    instagram: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
