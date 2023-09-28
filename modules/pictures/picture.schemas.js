const Joi = require("joi");

const pictureSchema = Joi.object({
  title1: Joi.string().required(),
  descriptions: Joi.string(),
  image: Joi.string().required(),
  id: Joi.string(),
  dateStamp: Joi.number(),
});

module.exports = { pictureSchema };
