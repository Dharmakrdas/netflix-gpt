// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfhn8pZRo3oMd0Mlbb_PH06WbOjwZ1pKA",
  authDomain: "netflixgpt-eaf51.firebaseapp.com",
  projectId: "netflixgpt-eaf51",
  storageBucket: "netflixgpt-eaf51.appspot.com",
  messagingSenderId: "637530560824",
  appId: "1:637530560824:web:fe75a181f453ce229849cd",
  measurementId: "G-41C749WR0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
