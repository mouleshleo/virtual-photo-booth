/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import "../style/webcam.css";
import axios from "axios";
import image from '../assets/frame.png';

const frameImage = image;

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [finalImage, setFinalImage] = useState(null);
  const [customText, setCustomText] = useState("");
  const [email, setEmail] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsPopupVisible(true); 
  }, [webcamRef]);

  const handleTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const handleSendEmail = async () => {
    if (!email) {
      alert("Please enter an email.");
      return;
    }

    try {
      const [capturedImg, frameImg] = await Promise.all([
        loadImage(capturedImage),
        loadImage(frameImage),
      ]);

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = capturedImg.width;
      canvas.height = capturedImg.height;

      ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

      ctx.drawImage(capturedImg,50,50,canvas.width-100, canvas.height-100);

      ctx.font = "20px Celandine";
      ctx.fillStyle = "black";
      ctx.fillText(customText, 20, canvas.height - 20);

      const finalImage = canvas.toDataURL("image/png");

      setFinalImage(finalImage);

      await axios.post("http://localhost:5000/send-email", {
        to_email: email,
        image_data: finalImage,
      });

      alert("Photo sent successfully!");
      setCustomText(null);
      setEmail(null);
      setCapturedImage(null);
      setFinalImage(null);
      setIsPopupVisible(false); 
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Try again later.");
    }
  };

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam-feed"
      />
      <button className="capture-btn" onClick={captureImage}>
        Capture Photo
      </button>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Preview Image</h2>
            {finalImage ? (
              <img src={finalImage} alt="Final" className="captured-image" />
            ) : (
              <p>Processing the image...</p>
            )}
            <input
              type="text"
              placeholder="Enter your custom text"
              value={customText}
              onChange={handleTextChange}
              className="text-input"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="email-input"
            />
            <button className="send-email-btn" onClick={handleSendEmail}>
              Send to Email
            </button>
            <button className="close-btn" onClick={() => setIsPopupVisible(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
