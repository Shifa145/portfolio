const asyncHandler = require('express-async-handler');
const sendEmail = require('../utils/sendEmail'); // Adjust path as necessary

// @desc    Send contact form inquiry
// @route   POST /api/contact
// @access  Public
const sendContactInquiry = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Inquiry',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.status(201).json({ message: 'Inquiry sent successfully' });
  } catch (error) {
    res.status(500);
    throw new Error('Email sending failed');
  }
});

module.exports = {
  sendContactInquiry,
};
