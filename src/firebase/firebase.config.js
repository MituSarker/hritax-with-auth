// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-74_beIm6_h9mK633Mg0NOWxkBBGkx8w",
  authDomain: "hritax-with-auth.firebaseapp.com",
  projectId: "hritax-with-auth",
  storageBucket: "hritax-with-auth.appspot.com",
  messagingSenderId: "127901146045",
  appId: "1:127901146045:web:e46c7815dcfafd103810d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;