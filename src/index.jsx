import React from 'react';
import ReactDOM from 'react-dom';
import WebcamCapture from './components/webcamcapture';

const App = () => (
    <div>
        <h1>Webcam Capture App</h1>
        <WebcamCapture />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
