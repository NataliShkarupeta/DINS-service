const { addPictureServ, listPucturesServ } = require("./pictures.service");

const addPicture = (req, res) => {
  const data = addPictureServ(req);

  return res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: data,
    },
  });
};

const listPuctures = async (req, res) => {
  const data = await listPucturesServ(req);
  return res.json({
    status: "success",
    code: 200,
    data: {
      result: data,
    },
  });
};

module.exports = { addPicture, listPuctures };
