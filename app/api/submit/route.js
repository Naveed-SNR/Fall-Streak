
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request)  {

const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD
try {

  const { packageName, name, emailID, phone} = await request.json();
  
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
    subject: 'New Booking',
    html: `
    <h3>Booking for: ${packageName}</h3>
    <li> Customer Name: ${name}</li>
    <li> Customer Email: ${emailID}</li> 
    <li> Customre Phone: ${phone}</li>
    `
  };
    
  await transporter.sendMail(mailOptions);
  return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })

} catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}