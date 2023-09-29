const Joi = require("joi");

const pictureSchema = Joi.object({
  title1: Joi.string().required(),
  descriptions: Joi.string(),
  id: Joi.string(),
  dateStamp: Joi.number(),
});

module.exports = { pictureSchema };
