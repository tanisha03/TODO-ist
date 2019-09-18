import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAM4yQZde0Yu-cngppoX8d--xqd5tpQ12A",
  authDomain: "todo-ist-3c3c2.firebaseapp.com",
  databaseURL: "https://todo-ist-3c3c2.firebaseio.com",
  projectId: "todo-ist-3c3c2",
  storageBucket: "todo-ist-3c3c2.appspot.com",
  messagingSenderId: "680931028845",
  appId: "1:680931028845:web:48e3044f8686b0571ab464"
});

export { firebaseConfig as firebase };
