// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFrdCMnKFNaXUQOlHTRE8iE65nkhM19-A",
  authDomain: "toptop-5f6e7.firebaseapp.com",
  projectId: "toptop-5f6e7",
  storageBucket: "toptop-5f6e7.appspot.com",
  messagingSenderId: "354780262620",
  appId: "1:354780262620:web:cae010fdc6850026f70419",
  measurementId: "G-6PD13TYYY9"
};

// Initialize Firebase
const app=  firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;