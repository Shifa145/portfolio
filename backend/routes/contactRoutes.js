const express = require('express');
const router = express.Router();
const { sendContactInquiry } = require('../controllers/contactController');

router.post('/', sendContactInquiry);

module.exports = router;
