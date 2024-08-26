const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();
require("dotenv").config();
const PORT = 3002;


app.use(express.json());
app.use("/api/v1/", userRouter);
const db = require("./database/db")
db();
app.listen(PORT, (error) => {
        if (!error)
            console.log("Server is Successfully Running, and App is listening on port " + PORT)
        else
            console.log("Error occurred, server can't start", error);
    }
); 
