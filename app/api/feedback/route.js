import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request)  {

const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD
try {

  const { name, emailID, subject, message} = await request.json();
  
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
    subject: 'New Message From Customer',
    html: `
    <h3>Customer Name: ${name}</h3>
    <li>Customer E-mail: ${emailID}</li>
    <li>Subject: ${subject}</li> 
    <li>Message: <br>${message}</li>
    `
  };
    
  await transporter.sendMail(mailOptions);
  return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })

} catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}