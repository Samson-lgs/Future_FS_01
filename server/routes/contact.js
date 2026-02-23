const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// POST - Send contact form
router.post('/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { name, email, subject, message } = req.body;

      // Save to database
      const contact = new Contact({
        name,
        email,
        subject,
        message
      });

      await contact.save();

      // Send email notification
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = createTransporter();
          
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || 'sanjaysamson0522@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <hr>
              <p><small>Sent from Portfolio Website</small></p>
            `
          };

          await transporter.sendMail(mailOptions);
        } catch (emailError) {
          console.error('Email sending error:', emailError);
          // Continue even if email fails
        }
      }

      res.status(201).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        data: contact
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }
  }
);

// GET - Get all messages (for admin dashboard - optional)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
