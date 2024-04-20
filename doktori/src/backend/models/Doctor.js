const mongoose = require("mongoose");

const doctorSignUp = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model("Doctor", doctorSignUp);

module.exports = Doctor;
