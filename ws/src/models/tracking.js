const mongoose = require("mongoose");

const Tracking = new mongoose.Schema({
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

  //F = Fee | G = Gain| L = Loss |
  operation: {
    type: String,
    enum: ["F", "G", "L", "W"],
    required: [true, "Operation is required"],
  },

  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },

  transactionId: {
    type: String,
    required: [
      function () {
        return ["F", "W"].includes(this.operation);
      },
      "Transaction's ID is required",
    ],
  },

  register: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Tracking", Tracking);
