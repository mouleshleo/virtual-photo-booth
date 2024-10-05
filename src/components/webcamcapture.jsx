import React, { useRef } from 'react';

const WebcamCapture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => {
                console.error('Error accessing webcam: ', err);
            });
    };

    const captureImage = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const image_data = canvas.toDataURL('image/png');
        
        sendEmail(image_data);
    };

    const sendEmail = (image_data) => {
        const to_email = 'mouleshleo06@gmail.com'; 
        fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to_email, image_data }),
        })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <video ref={videoRef} width="640" height="480" />
            <button onClick={startCamera}>Start Camera</button>
            <button onClick={captureImage}>Capture Image</button>
            <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
        </div>
    );
};

export default WebcamCapture;
