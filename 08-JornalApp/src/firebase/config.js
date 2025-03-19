// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Dev/Prod
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUrp2Ctc5mRWmKbLodwjA975Zwz4uYlvA",
//   authDomain: "react-curso-6c092.firebaseapp.com",
//   projectId: "react-curso-6c092",
//   storageBucket: "react-curso-6c092.firebasestorage.app",
//   messagingSenderId: "69571533703",
//   appId: "1:69571533703:web:a5bd2db87eb854f0991122"
// };

// testing
const firebaseConfig = {
  apiKey: "AIzaSyCdZ4LBLoivfzKQ3LT-Pduxt1W2MntoIRc",
  authDomain: "testing-ecfef.firebaseapp.com",
  projectId: "testing-ecfef",
  storageBucket: "testing-ecfef.firebasestorage.app",
  messagingSenderId: "640766794184",
  appId: "1:640766794184:web:73c73756faca14d6dd48fd",
  measurementId: "G-B9T9N9KV8V"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth =  getAuth( FirebaseApp );
export const FirebaseBD = getFirestore( FirebaseApp );