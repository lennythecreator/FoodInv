// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqg4KtMSsY24HVNMjYDSS__1XfM0C15oA",
  authDomain: "foodinv-7c1c3.firebaseapp.com",
  projectId: "foodinv-7c1c3",
  storageBucket: "foodinv-7c1c3.appspot.com",
  messagingSenderId: "1069074392730",
  appId: "1:1069074392730:web:8ebb5a8e43657289bf6123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db,getDocs,collection}