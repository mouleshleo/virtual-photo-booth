// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../style/header.css';
import logo1 from "../assets/nss_logo.png";
import logo2 from "../assets/tce_logo.png"
{/*import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image1.jpeg";
import img3 from "../assets/nss_logo.png";*/}

const Header = () => {
    const [timeLeft, setTimeLeft] = useState("");
    {/*const [currentImage, setCurrentImage] = useState(0);
  
    const images = [img1, img2, img3];*/}
  
    useEffect(() => {
      const calculateTimeLeft = () => {
        const eventDate = new Date("2024-09-25T00:00:00");
        const currentDate = new Date();
        const timeDifference = eventDate - currentDate;
  
        if (timeDifference > 0) {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  
          setTimeLeft(
            `${days} days, ${hours} hours, ${minutes} minutes left`
          );
        } else {
          setTimeLeft("The event has started!");
        }
      };
  
      const timer = setInterval(calculateTimeLeft, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
{/*    useEffect(() => {
      const imageInterval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(imageInterval);
    }, [images.length]);*/}
  
    return (
      <div className='box-1'>
        <div className='top-box'>
          <div className="logo-container">
            <img src={logo1} alt="Event Logo" className="logo" />
            <img src={logo2} alt="College Logo" className='logo'/>
          </div>
          <div className='booth-name'>
            <h1>Start Camera Snap</h1>
          </div>
          <div className="event-details">
            <h1 className="event-title">NSS Day 2024</h1>
            <p className="event-date">{timeLeft}</p>
          </div>
        </div>
  
        {/* Image carousel 
        <div className="image-carousel">
          <img
            src={images[currentImage]}
            alt="Event images"
            className="carousel-image"
          />
        </div>*/}
      </div>
    );
  };
  
  export default Header;