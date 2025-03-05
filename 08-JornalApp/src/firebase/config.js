// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUrp2Ctc5mRWmKbLodwjA975Zwz4uYlvA",
  authDomain: "react-curso-6c092.firebaseapp.com",
  projectId: "react-curso-6c092",
  storageBucket: "react-curso-6c092.firebasestorage.app",
  messagingSenderId: "69571533703",
  appId: "1:69571533703:web:a5bd2db87eb854f0991122"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth =  getAuth( FirebaseApp );
export const FirebaseBD = getFirestore( FirebaseApp );