
# Virtual Photo Booth

This project is a virtual photo booth where users can capture photos using their webcam, customize them, and send the photos via email.

## Table of Contents
- [Installation](#installation)
- [Setting up Environment Variables](#setting-up-environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

---

## Installation

### 1. Install Node.js
Before running the project, ensure that you have Node.js installed. You can download and install Node.js from [here](https://nodejs.org/en/download/).

You can verify the installation by running:

```bash
node -v
npm -v
```

### 2. Clone the Repository
Create a directory and clone this repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/virtual-photo-booth.git
```

### 3. Install Dependencies
Navigate to the project folder and install the required dependencies by running:

```bash
cd virtual-photo-booth
npm install
```

---

## Setting up Environment Variables

You need to configure your environment variables to handle sensitive information like your email credentials. Create a `.env` file in the root directory of your project with the following content:

```bash
EMAIL=your-email@example.com
PASS=your-email-password
```

Click [here](https://support.google.com/accounts/answer/185833?hl=en) to know how to create the password for third part access to your gmail from .
After knowing about app password click [here](https://myaccount.google.com/apppasswords) to set up app password (make sure you are not using student mail id and 2 step verification is enabled)
You will be prompted to enter your account password.

Other way to use this is to use a service provider like emailjs(To learn about this click [here](https://www.emailjs.com/docs/) ) but this is not used here.

Make sure to replace `your-email@example.com` and `your-email-password` with your actual Gmail email and app-specific password (if using Gmail, ensure you enable less secure apps or use an app-specific password).

**Note:** Never commit your `.env` file to a public repository, as it contains sensitive information.

---

## Running the Application

Once all dependencies are installed, you can start the development server by running:

```bash
npm run dev
```

This will start the project, and it should be accessible at `http://localhost:3000`.

---

### Running the Server

To start the server, run:

```bash
node server.js
```

---

## Project Structure

```bash
├── node_modules
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── frame.png
│   │   ├── logo1.png
│   │   └── logo2.png
│   ├── components
│   │   ├── header.jsx
│   │   ├── sidepanel.jsx
│   │   └── webcamcapture.jsx
│   ├── style
│   │   ├── header.css
│   │   ├── index.css
│   │   ├── sidepanel.css
│   │   └── webcam.css
│   └── index.jsx
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---
