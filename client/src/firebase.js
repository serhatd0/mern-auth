// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4333d.firebaseapp.com",
  projectId: "mern-auth-4333d",
  storageBucket: "mern-auth-4333d.appspot.com",
  messagingSenderId: "730296708155",
  appId: "1:730296708155:web:a54ed01b2d38945f7e401e",
  measurementId: "G-Y029S7FLWF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
