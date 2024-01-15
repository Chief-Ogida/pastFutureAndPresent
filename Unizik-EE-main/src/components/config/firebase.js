// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt8n2ycXo3_2-ZtefSE8zzaNcmzGxUuNw",
  authDomain: "gvu-lastdance.firebaseapp.com",
  projectId: "gvu-lastdance",
  storageBucket: "gvu-lastdance.appspot.com",
  messagingSenderId: "240196103622",
  appId: "1:240196103622:web:01e2f975e467758358d6c7",
  measurementId: "G-9B7FD4QCEP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
