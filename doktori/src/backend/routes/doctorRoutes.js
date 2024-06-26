const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Doctor sign-up
router.post("/signup", doctorController.signUpDoctor);
// Doctor sign-in
router.post("/signin", doctorController.signInDoctor);
//Doctor Profile
router.get('/profile', doctorController.getDoctorProfile);

module.exports = router;
