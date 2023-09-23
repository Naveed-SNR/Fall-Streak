
const nodemailer = require('nodemailer');

const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD
// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

module.exports = transporter;
