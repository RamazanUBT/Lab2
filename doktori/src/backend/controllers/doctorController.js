const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

const secretKey = require("crypto").randomBytes(64).toString("hex");

// Doctor sign-up
exports.signUpDoctor = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    // Check if doctor with the given email already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).send("Doctor with this email already exists");
    }

    // Create a new doctor
    const newDoctor = new Doctor({
      fullName,
      email,
      password,
    });

    // Save the doctor to the database
    await newDoctor.save();

    // Return success message
    res.status(201).send("Doctor signed up successfully");
  } catch (error) {
    console.error("Error signing up doctor:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Doctor sign-in
exports.signInDoctor = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if doctor with the given email and password exists
    const doctor = await Doctor.findOne({ email, password });
    if (doctor) {
      // Generate token
      const token = jwt.sign({ email: doctor.email }, secretKey, { expiresIn: "1h" });

      // Send token in response
      res.json({ token });
    } else {
      // Doctor doesn't exist or incorrect credentials
      res.status(401).send("Email or password is incorrect");
    }
  } catch (error) {
    console.error("Error signing in doctor:", error);
    res.status(500).send("Internal Server Error");
  }
};