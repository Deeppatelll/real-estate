// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prime-estate-c4504.firebaseapp.com",
  projectId: "prime-estate-c4504",
  storageBucket: "prime-estate-c4504.firebasestorage.app",
  messagingSenderId: "520751415590",
  appId: "1:520751415590:web:3ef380022ec454198741e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);