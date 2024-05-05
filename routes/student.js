const express = require('express');
const path = require('path');
const studentController = require('../contollers/student');

// http://localhost:3000/student

const router = express.Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.post('/', studentController.getStudentByUsername);
router.post('/update', studentController.updateStudentInfo, studentController.getStudentByUsername);
router.post('/delete/:username', studentController.deleteStudent);

module.exports = router;