const mongoose = require('mongoose');

const connectdb = ()=>{

require("dotenv").config();
    mongoose.connect(process.env.DataBase_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{console.log("connection is establish successful")})
    .catch((err)=>{console.log(err)})
}

module.exports = connectdb;