const Joi= require("joi") ;


const postSchema = Joi.object({
  title: Joi.string().required(),
  descriptions: Joi.string().required(),
  titleEn: Joi.string(),
  descriptionsEn: Joi.string(),
  id: Joi.string(),
  dateStamp: Joi.number(),
});

module.exports = { postSchema };
