const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name to continue"],
  },

  email: {
    type: String,
    required: [true, "Enter your email to continue"],
  },
  password: {
    type: String,
    required: [true, "Enter a password to continue"],
  },
  photo: {
    type: String,
    required: [true, "Enter your photo to continue"],
  },

  cpf: {
    type: String,
    required: [true, "Enter your CPF to continue"],
  },
  birthday: {
    type: String,
    required: [true, "Enter your birthday to continue"],
  },
  customerID: {
    type: String,
  },

  status: {
    type: String,
    enum:['A','I','P'],
    default:'P'
  },

  register: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("User", User);
