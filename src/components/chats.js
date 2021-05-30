import React,{useEffect,useState} from 'react'
import Chat from './chat'
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import {selectUser} from '../features/appslice'
import {resetCameraImage} from '../features/camera'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import {db,auth} from '../firebase'
import './chats.css'

function Chats() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const takeSnap = () => {
    dispatch(resetCameraImage());
    history.push("/");
  };

    return (
        <div className="chats">
             <div className="chats_header">
        <Avatar
         
          className="chats_avatar"
          src={user.profileImage}
          onClick={() => auth.signOut()}
        />
        <div className="chats_search">
          <SearchIcon />
          <input type="text" placeholder="Friends" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>
      <div className="chats_posts">
       
      {posts.map(
          ({
            id,
            data: { profileImage, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              profileImage={profileImage}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
            />
          )
        )}
         
      </div>
      <RadioButtonUncheckedIcon
        className="chats_takePicture"
        onClick={takeSnap}
        fontSize="large"
      />
            
        </div>
    )
}

export default Chats
