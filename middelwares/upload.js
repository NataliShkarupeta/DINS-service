const multer = require("multer");
// const { multerConfig } = require("../config");

// const upload = multer({
//   storage: multerConfig,
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = upload;
