const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Doctor sign-up
router.post("/signup", doctorController.signUpDoctor);
router.post("/signin", doctorController.signInDoctor);

module.exports = router;
