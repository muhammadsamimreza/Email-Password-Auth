// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDcUJWsGNtfnAvR42ZC_RsjmyfentIk0w",
  authDomain: "email-password-auth-a11ff.firebaseapp.com",
  projectId: "email-password-auth-a11ff",
  storageBucket: "email-password-auth-a11ff.firebasestorage.app",
  messagingSenderId: "1079643481291",
  appId: "1:1079643481291:web:be9d91a7709d96b7c7a74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);