const dotenv = require("dotenv");
const path = require("path");

let config;

exports.getConfig=()=>{
    if(config){return config}

    dotenv.config({path:path.join(__dirname,"./.env")});

    config={
        PORT:process.env.PORT
    }


    return config;
}