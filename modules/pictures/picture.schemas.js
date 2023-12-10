const Joi = require("joi");

const pictureSchema = Joi.object({
  title1: Joi.string().required(),
  descriptions: Joi.string(),
  TitleEn: Joi.string(),
  descriptionsEn: Joi.string(),
  id: Joi.string(),
  dateStamp: Joi.number(),
  inStock: Joi.string().required(),
  inStockEn: Joi.string().required(),
  size: Joi.string(),
});

module.exports = { pictureSchema };

