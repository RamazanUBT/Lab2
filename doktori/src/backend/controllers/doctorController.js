const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');

const secretKey = "e805a6303b3d22c32b2d9c3c8c4ef1269b04f89baa52452ad7e7c9cd99e64516";

// Doctor sign-up
exports.signUpDoctor = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).send('Doctor with this email already exists');
    }

    const newDoctor = new Doctor({
      fullName,
      email,
      password,
    });

    await newDoctor.save();
    res.status(201).send('Doctor signed up successfully');
  } catch (error) {
    console.error('Error signing up doctor:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Doctor sign-in
exports.signInDoctor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email, password });
    if (doctor) {
      const token = jwt.sign({ id: doctor._id, email: doctor.email }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Email or password is incorrect');
    }
  } catch (error) {
    console.error('Error signing in doctor:', error);
    res.status(500).send('Internal Server Error');
  }
};
