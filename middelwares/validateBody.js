const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ massage: "Bad request", code: 400 });
    }
    next();
  };
};

module.exports = validateBody;
