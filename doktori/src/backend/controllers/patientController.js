const Patient = require('../models/Patient');
const jwt = require('jsonwebtoken');

const secretKey = "e805a6303b3d22c32b2d9c3c8c4ef1269b04f89baa52452ad7e7c9cd99e64516";

exports.addPatient = async (req, res) => {
  const { firstName, lastName, city, address, birthYear } = req.body;
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send('Access Token Required');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    const doctorId = decoded.id;

    const newPatient = new Patient({
      firstName,
      lastName,
      city,
      address,
      birthYear,
      doctor: doctorId,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getPatientsByDoctorId = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    const doctorId = decoded.id;
  
    try {
      // Fetch patients based on the doctor's ID
      const patients = await Patient.find({ doctor: doctorId });
      res.json(patients);
    } catch (error) {
      console.error('Error fetching patients:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
  
