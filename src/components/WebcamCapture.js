import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";

import './webcam.css'
import { setCameraImage } from "../features/camera";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";


const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
   
  
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setCameraImage(imageSrc));
    
    }, [webcamRef, dispatch]);
  
    return (
      <div className="webcamCapture">
        <Webcam
          audio={false}
          height={videoConstraints.height}
          width={videoConstraints.width}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        
        <RadioButtonUncheckedIcon
          className="webcamCapture__button"
          onClick={capture}
          fontSize="large"
        />
  
      </div>
    );
  }
  
  export default WebcamCapture;