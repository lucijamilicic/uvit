const express = require('express');
const examController = require('../contollers/exam');

// http://localhost:3000/exams

const router = express.Router();

router.get('/', examController.getExamsByUsername);

module.exports = router;