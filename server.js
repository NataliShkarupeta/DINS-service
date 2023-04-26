const app = require('./app')
const {getConfig}=require("./config");

const { PORT }= getConfig();


app.listen(PORT, () => {
    // console.log(PORT)
  console.log("Server flying.Use our API on port: 3001");
});