const { addPictureServ } = require("./pictures.service");

const addPicture= async()=>{
    const data = await addPictureServ(req);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: data,
    },
  });
}

module.exports= {addPicture};