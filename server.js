/* eslint-disable no-undef */
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import { configDotenv } from 'dotenv';
const app=express();
const port=5000;
configDotenv();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.post('/send-email',(req,res)=>{
  const { to_email,image_data }=req.body;

  if (!to_email || !image_data) {
    return res.status(400).send('Missing email or image data');
  }

  const transporter=nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions={
    from: process.env.EMAIL,
    to: to_email,
    subject: 'Your Captured Image with Custom Text',
    html: '<h3>Here is your photo with the custom text!</h3>',
    attachments: [
      {
        filename: 'custom-image.png',
        content: image_data.split('base64,')[1],
        encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
      console.error('Error sending email:',error);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent:',info.response);
    res.status(200).send('Email sent successfully');
  });
});

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});
