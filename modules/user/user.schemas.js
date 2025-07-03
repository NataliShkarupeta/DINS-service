const Joi = require("joi");

const addUserSchema = Joi.object({
  phone: Joi.string().required(),
  name: Joi.string().allow(""),
  nameEn: Joi.string().allow(""),
  gender: Joi.string().allow(""),
  genderEn: Joi.string().allow(""),
  feedback: Joi.string().allow(""),
  feedbackEn: Joi.string().allow(""),
  date: Joi.string().allow(""),
  instagram: Joi.string().uri().allow(""),
});

module.exports = { addUserSchema };
