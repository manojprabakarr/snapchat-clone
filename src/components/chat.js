import React from 'react'
import { Avatar } from "@material-ui/core";
import ReactTimeago from "react-timeago";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import { selectImage } from "../features/appslice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { useHistory } from "react-router";
import './chat.css'



function Chat({ id, profileImage, imageUrl, read, timestamp, username }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        {
          merge: true,
        }
      );

      history.push("/chats/view");
    }
  };

 

    return (
        <div onClick={open} className="chat">

<Avatar  className="chat__avatar" src={profileImage}/>
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
        {!read && "Tap to view - "}
         <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        
        </p>
      </div>
      {!read && <FiberManualRecordRoundedIcon className="chat__readIcon" />}
            
        </div>
    )
}

export default Chat
