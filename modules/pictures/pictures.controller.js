const {
  addPictureServ,
  listPucturesServ,
  pictureByIdServ,
} = require("./pictures.service");

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

const pictureById= async(req,res)=>{
   const data = await pictureByIdServ(req.params.paintingId);
    if (!data) {
    return  res.json({ message: "Not found", status: 404 });
    }
    return res.json(data);
}

module.exports = { addPicture, listPuctures, pictureById };
