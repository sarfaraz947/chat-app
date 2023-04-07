// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANkdyOOGBYRpdQS0ASGH5F-BIrohMF4jA",
  authDomain: "chat-app-yt-387f0.firebaseapp.com",
  projectId: "chat-app-yt-387f0",
  storageBucket: "chat-app-yt-387f0.appspot.com",
  messagingSenderId: "99120835625",
  appId: "1:99120835625:web:3ddbc757654d291e1c0038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)