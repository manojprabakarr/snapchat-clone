import React from 'react'
import Chat from './chat'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import './chats.css'

function Chats() {
    return (
        <div className="chats">
             <div className="chats_header">
        <Avatar
         
          className="chats_avatar"
        />
        <div className="chats_search">
          <SearchIcon />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>
      <div className="chats_posts">
       
            <Chat/>
         
      </div>
      <RadioButtonUncheckedIcon
        className="chats_takePicture"
       
        fontSize="large"
      />
            
        </div>
    )
}

export default Chats
