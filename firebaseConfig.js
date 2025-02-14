// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxdB0O_nwnz6jr9bipS74KrAcWFcQxYks",
  authDomain: "pl-brothers-exporters-llp.firebaseapp.com",
  projectId: "pl-brothers-exporters-llp",
  storageBucket: "pl-brothers-exporters-llp.firebasestorage.app",
  messagingSenderId: "761856857866",
  appId: "1:761856857866:web:125a6d9b3d203cd9dc4cf3",
  measurementId: "G-NT3K9VGYYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);