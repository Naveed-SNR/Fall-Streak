import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request)  {
  try {
    const { packageName, name, emailID, phone} = await request.json();
  
    const email = process.env.EMAIL
  
    const mailOptions = {
      from: 'fallstreakbookings@resend.dev',
      to: email,
      subject: 'New Booking',
      html: `  
              <div style="border: 1px solid grey; border-radius: 8.3px;">
                <div style="background-color: black; color: white; padding: 11px; margin-top: 11px; border-bottom: 1px solid grey">
                  <h1 style="display: inline; font-size: 30px; font-family: Arial;">Fall Streak</h1><br><br><h2 style ="display:  inline; font-family: Arial; font-size: 21px; font-weight: 400;">New Booking</h2>
                </div>
                <div style="padding: 4px; margin: 11px;">
                  <h2 style ="display: inline; font-family: Arial; font-size: 21px; font-weight: 542;">Package Name:</h2><h2 style  ="display: inline; font-size: 21px; font-weight:308; font-family: Arial;"> ${packageName}</h2>
                </div>
                <div style="padding: 4px; margin: 11px;">
                  <h2 style ="display: inline; font-family: Arial; font-size: 21px; font-weight: 542;">Name:</h2><h2 style  ="display: inline; font-size: 21x; font-weight:308; font-family: Arial;"> ${name}</h2>
                </div>
                <div style="padding: 4px; margin: 11px;">
                  <h2 style ="display: inline; font-family: Arial; font-size: 21px; font-weight: 542;">Email:</h2><h2 style   ="display: inline; font-size: 21px; font-weight:308; font-family: Arial;"> ${emailID}</h2>
                </div>
                <div style="padding: 4px; margin: 11px;">
                  <h2 style ="display: inline; font-family: Arial; font-size: 21px; font-weight: 542;">Phone:</h2><h2 style   ="display: inline; font-size: 21px; font-weight:308; font-family: Arial;"> ${phone}</h2>
                </div>
              </div>
      `
    };
    await resend.sendEmail(mailOptions);
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}
