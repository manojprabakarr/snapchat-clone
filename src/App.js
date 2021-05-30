import  React,{useEffect} from 'react'
import './App.css'
import Webcam from './components/WebcamCapture'
import Chatview from './components/Chatview'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appslice";
import {auth} from './firebase'
import Login from './components/login'
import Preview from './components/preview'
import Chats from './components/chats'



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profileImage: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
            <Login/>
        ):(
        <>
        <img
              className="app_logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt=""
            />
            <div className="app_body">
              <div className="app_bodyBackground">
                <Switch>
               
                  <Route exact path="/"><Webcam/></Route>
                  <Route  path="/chats/view"><Chatview/></Route>
                  <Route path="/chats"><Chats/></Route>
                  <Route path="/preview"><Preview/></Route>
                 
                </Switch>

                
              

              </div>
              </div>
              
              </>)}
              </Router>
    </div>
  );
}

export default App;
