import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB-ouhXeRicFGBmaRrNxdRjugS2TOM-d1s",
    authDomain: "snapchat-c79fe.firebaseapp.com",
    projectId: "snapchat-c79fe",
    storageBucket: "snapchat-c79fe.appspot.com",
    messagingSenderId: "882042587175",
    appId: "1:882042587175:web:af8dda7209f0222144e602",
    measurementId: "G-T6PTQP6VW3"
  };
  

  const firebaseapp= firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();


export {db,provider,auth,storage}
