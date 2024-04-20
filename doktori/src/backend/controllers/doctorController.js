const Doctor = require("../models/Doctor");

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
      // Doctor exists, send to specific page
      // Replace the following line with your page redirect logic
      // res.redirect('/doctor/dashboard');
      res.send("Doctor signed in successfully"); // Temporary response
    } else {
      // Doctor doesn't exist or incorrect credentials
      res.status(401).send("Email or password is incorrect");
    }
  } catch (error) {
    console.error("Error signing in doctor:", error);
    res.status(500).send("Internal Server Error");
  }
};
