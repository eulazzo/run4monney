const mongoose = require("mongoose");

const Challenge = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter your title to continue"],
  },
  description: {
    type: String,
    required: [true, "Enter a description to continue"],
  },
  fee: {
    type: Number,
    required: [true, "Enter a fee to continue"],
  },

  distance: {
    type: Number,
    required: [true, "Enter a distance to continue"],
  },

  date: {
    start: {
      type: String,
      required: [true, "Enter  date start to continue"],
    },
    end: {
      type: String,
      required: [true, "Enter  date end to continue"],
    },
  },

  time: {
    start: {
      type: String,
      required: [true, "Enter start time to continue"],
    },
    end: {
      type: String,
      required: [true, "Enter end time to continue"],
    },
  },

  ytVideoId: {
    type: String,
    required: [true, "Youtube id is necessary"],
   
  },

  status: {
    type: String,
    enum: ["A", "I", "P"],
    default: "P",
  },

  register: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Challenge", Challenge);
