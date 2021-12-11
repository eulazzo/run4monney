const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv. config();
const morgan = require("morgan");
const cors = require("cors");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const userRouter = require("./src/routes/user.routes");
require("./db")

 

 

//MIDDLEWARES
app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use(busboy());
app.use(busboyBodyParser());
app.use("/user", userRouter);

app.listen(8080, () => console.log("backend server is running!"));
