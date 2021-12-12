const mongoose = require("mongoose");

const UserChallenge = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },

  challengeId: {
    type: mongoose.Types.ObjectId,
    ref: "Challenge",
    required: [true, "Challenge is required"],
  },

  
  register: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserChallenge", UserChallenge);
