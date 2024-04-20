const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Sign-in admin
router.post("/signin", authController.signInAdmin);

module.exports = router;
