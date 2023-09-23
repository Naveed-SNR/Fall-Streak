// import { transporter, mailOptions } from "../../../nodemailer";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request)  {

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

 const mailOptions = {
    from: email,
    to: email,
};
  
  
  const data = await request.json()

  console.log(data)
   await transporter.sendMail({
    from: email,
    to: email,// Change this to your destination email
    subject: 'New Booking Form Submission',
    text: `${data}`,
  });
  
return NextResponse.json({data})
  
// //   console.log('Email sent:', info.response);
  
// //   res.status(200).json({ message: 'Form data sent successfully!' });
// // }
    
// //     catch (error) {
// //       console.error('Error submitting form:', error);
// //       res.status(500).json({ error: 'An error occurred while submitting the form.' });
// //     }



}