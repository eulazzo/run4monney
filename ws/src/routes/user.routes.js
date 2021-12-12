const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Busboy = require("busboy");
const bcrypt = require("bcrypt");
const moment = require("moment");
const aws = require("../services/aws.js");

const User = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const busboy = new Busboy({
    headers: req.headers,
  });

  busboy.on("finish", async () => {
    try {
      const userId = mongoose.Types.ObjectId();

      let photo = "";
      //Upload Image
      if (req.files) {
        const file = req.files.photo;
        const nameParts = file.name.split(".");
        const fileName = `${userId}.${nameParts[nameParts.length - 1]}`;

        photo = `users/${fileName}`;

        const response = await aws.uploadToS3(file, photo);

        console.log(response);

        if (response.error) {
          res.json({ error: true, message: response.message });
          return false;
        }
      }

      const password = await bcrypt.hash(req.body.password, 10);

      //CREATE USER
      const newUser = await new User({
        ...req.body,
        _id: userId,
        password,
        photo,
      }).save();

      res.status(200).json({newUser})

    } catch (err) {
      res.json({ err: true, message: err.message });
    }
  });

  req.pipe(busboy);
});

module.exports = router;
