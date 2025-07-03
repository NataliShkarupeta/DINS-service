const app = require("./app");
const mongoose = require("mongoose");
const { getConfig } = require("./config");

const { PORT, db } = getConfig();

const connection = mongoose.connect(db.url);

connection
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
      
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });


