import React from 'react'
import { Avatar } from "@material-ui/core";

import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import './chat.css'



function Chat() {

 

    return (
        <div className="chat">

<Avatar  className="chat__avatar" />
      <div className="chat__info">
        <h4>username</h4>
        <p>
         Tap to view 
        
        </p>
      </div>
    <FiberManualRecordRoundedIcon className="chat__readIcon" />
            
        </div>
    )
}

export default Chat
