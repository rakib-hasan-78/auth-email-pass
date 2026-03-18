// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSEnNZvcntpvKJwOylBt_sQAWT7Nb4xj4",
  authDomain: "email-auth-61248.firebaseapp.com",
  projectId: "email-auth-61248",
  storageBucket: "email-auth-61248.firebasestorage.app",
  messagingSenderId: "978976387028",
  appId: "1:978976387028:web:e2db461ba6ecaacb19b041"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);