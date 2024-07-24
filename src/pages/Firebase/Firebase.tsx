// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Credenciales";
import { getFirestore } from "firebase/firestore";




// Initialize Cloud Firestore and get a reference to the service

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);