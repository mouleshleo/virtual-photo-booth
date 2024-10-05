import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { configDotenv } from 'dotenv';

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'src/style')));


configDotenv();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-email', (req, res) => {
  const { to_email, image_data } = req.body;

  if (!to_email || !image_data) {
    return res.status(400).send('Missing email or image data');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: to_email,
    subject: 'Your Captured Image',
    html: '<h3>Here is your photo!</h3>',
    attachments: [
      {
        filename: 'custom-image.png',
        content: image_data.split('base64,')[1],
        encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

// Define __dirname
const __dirname = path.resolve();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

