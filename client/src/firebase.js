// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-bac1c.firebaseapp.com",
  projectId: "estate-bac1c",
  storageBucket: "estate-bac1c.firebasestorage.app",
  messagingSenderId: "1079606753884",
  appId: "1:1079606753884:web:db745397e7e473a45a0499"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);