const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/add', patientController.addPatient);
router.get('/', patientController.getPatientsByDoctorId);

module.exports = router;
