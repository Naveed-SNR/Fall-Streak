const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Configure Nodemailer with your email service details
const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// Parse JSON requests
app.use(express.json());

// API endpoint to handle form submission
app.post('/api/submitForm', (req, res) => {
  const formData = req.body;

  // Send email
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Booking',
    text: `Package: ${formData.package}\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

  // You can also implement WhatsApp integration here using Twilio or another service

  res.sendStatus(200); // Send a success response to the client
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
