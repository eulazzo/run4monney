const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected!"))
//   .catch((err) => console.log(err));

//MIDDLEWARES
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

app.listen(8080, () => console.log("backend server is running!"));
