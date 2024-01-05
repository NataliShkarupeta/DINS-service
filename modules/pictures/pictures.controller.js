const {
  addPictureServ,
  listPucturesServ,
  pictureByIdServ,
  picturesInStockServ,
  picturesPlacesServ,
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

const picturesInStock=async(req,res)=>{
   const data = await picturesInStockServ(req);
   return res.json({
     status: "success",
     code: 200,
     data: {
       result: data,
     },
   }); 
}

const pictureById= async(req,res)=>{
   const data = await pictureByIdServ(req.params.paintingId);
    if (!data) {

    return  res.json({ message: "Not found", status: 404 });
    }
    return res.json(data);
}

const picturesPlaces = async (req, res) => {
  const data = await picturesPlacesServ(req);
  return res.json({
    status: "success",
    code: 200,
    data: {
      result: data,
    },
  });
};

module.exports = {
  addPicture,
  listPuctures,
  pictureById,
  picturesInStock,
  picturesPlaces,
};
