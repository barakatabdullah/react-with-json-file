// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCji2FspD2ZBGOzX6gISIVSEnpXHBiq6Sk",
  authDomain: "acara-3c200.firebaseapp.com",
  projectId: "acara-3c200",
  storageBucket: "acara-3c200.appspot.com",
  messagingSenderId: "546285937784",
  appId: "1:546285937784:web:bb4090b1de7466f2a4b98d",
  measurementId: "G-7JFRL8LK9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);