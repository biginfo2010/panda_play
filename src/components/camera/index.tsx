// components/Camera.tsx
import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

// Define type for the Webcam ref
type WebcamRef = React.MutableRefObject<Webcam | null>;

const Camera: React.FC = () => {
  const webcamRef: WebcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  // Function to capture the screenshot
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc); // Save captured image to state
    }
  }, [webcamRef]);

  return (
    <div>
      {!capturedImage ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user", // Use the front camera for selfie
            }}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={capture}>Capture Photo</button>
        </>
      ) : (
        <div>
          <h2>Your Selfie:</h2>
          <img src={capturedImage} alt="Selfie" />
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => setCapturedImage(null)}>Retake</button>
        </div>
      )}
    </div>
  );
};

export default Camera;
