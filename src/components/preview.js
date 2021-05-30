import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {selectCameraImage,resetCameraImage} from '../features/camera'
import  {selectUser} from '../features/appslice'
import CloseIcon from "@material-ui/icons/Close";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import { db, storage } from "../firebase";
import firebase from "firebase";
import './preview.css'


function Preview() {
    const user = useSelector(selectUser);
    const cameraImage=useSelector(selectCameraImage);
    console.log(cameraImage);
    const history = useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        if(!cameraImage) {
            history.replace("/");
        }

    },[cameraImage,history])

    const closepreview=()=> {
        dispatch(resetCameraImage());
    }

    const Sendpost=()=> {
        const id =  uuid();
        const uploadTask = storage.ref(`posts/${id}`)
        .putString(cameraImage,"data_url")

        uploadTask.on(
            "state_changed",
            null,
            (err) => console.log(err),
            () => {
              storage
                .ref("posts")
                .child(id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").add({
                    imageUrl: url,
                    username: user.username,
                    read: false,
                    profileImage: user.profileImage,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  });
                  history.replace("/chats");
                });
            }
          );

    }

    
    return (
        <div className="preview">
             <CloseIcon className="preview__close" onClick={closepreview}/>
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
         
          
             <img src={cameraImage} alt="" />

             <div className="preview__footer" onClick={Sendpost}> 
        <h2>Send now</h2>
        <SendIcon className="preview__sendIcon" />
      </div>
            
        </div>
    )
}

export default Preview
