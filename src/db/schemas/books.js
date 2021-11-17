const Joi = require("joi");

exports.createBookSchema = {
  schema: Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required()
  }),
  message: "an error occurred, check your inputs",
};
