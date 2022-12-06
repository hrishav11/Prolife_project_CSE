// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCMu-aEJ6wh8SRf-IPLCuuMuUsznwZ8dU",
  authDomain: "prolife-9b1d8.firebaseapp.com",
  projectId: "prolife-9b1d8",
  storageBucket: "prolife-9b1d8.appspot.com",
  messagingSenderId: "687417398339",
  appId: "1:687417398339:web:8d56b23fcffa94163830f6",
  measurementId: "G-BRSVFTQ86Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
