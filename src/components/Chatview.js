import React,{useEffect} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectedImage } from "../features/appslice";
import './chatview.css'


function Chatview() {
    const image = useSelector(selectedImage);
    const history = useHistory();
  
    const exit = () => {
      history.replace("/chats");
    };
  
    useEffect(() => {
      if (!image) {
        exit();
      }
    }, [image]);


    return (
        <div className="chatview">
              <img src={image} alt="" onClick={exit} />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
            
        </div>
    )
}

export default Chatview
