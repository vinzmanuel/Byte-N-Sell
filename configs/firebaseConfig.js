// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "byte-n-sell.firebaseapp.com",
    projectId: "byte-n-sell",
    storageBucket: "byte-n-sell.firebasestorage.app",
    messagingSenderId: "188930307649",
    appId: "1:188930307649:web:50a7e7290d3e0f593bf8c0",
    measurementId: "G-ZMZRKLPXBJ"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);