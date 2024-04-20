const Admin = require("../models/Admin");

// Sign-in admin
exports.signInAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      // Admin exists, send to specific page
      // Replace the following line with your page redirect logic
      // res.redirect('/admin/dashboard');
      res.send("Admin signed in successfully"); // Temporary response
    } else {
      // Admin doesn't exist or incorrect credentials
      res.status(401).send("Email or password is incorrect");
    }
  } catch (error) {
    console.error("Error signing in admin:", error);
    res.status(500).send("Internal Server Error");
  }
};
