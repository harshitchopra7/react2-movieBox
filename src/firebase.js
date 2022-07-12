import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsvihkz8GsGaL8IoBg2Fzc63pNhp8093c",
  authDomain: "react2-movies-app.firebaseapp.com",
  projectId: "react2-movies-app",
  storageBucket: "react2-movies-app.appspot.com",
  messagingSenderId: "976129509511",
  appId: "1:976129509511:web:140cdf263de0e8fbfd1022",
  measurementId: "G-GWC86MQR74",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// For database
const db = firebase.firestore();
// For authentication
const auth = firebase.auth();

export { app, auth };
export default db;
