// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_key",
  authDomain: "mern-book-haven.firebaseapp.com",
  projectId: "mern-book-haven",
  storageBucket: "mern-book-haven.appspot.com",
  messagingSenderId: "945092576466",
  appId: "1:945092576466:web:df0c88206239dc56ff990b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
