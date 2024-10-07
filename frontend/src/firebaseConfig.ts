// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore }  from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9am9diJVga47M2vxZSGzUakbAAugiRto",
  authDomain: "invoice-app-a7a5b.firebaseapp.com",
  projectId: "invoice-app-a7a5b",
  storageBucket: "invoice-app-a7a5b.appspot.com",
  messagingSenderId: "519598019925",
  appId: "1:519598019925:web:4b1bb8eb361bb9c8e58bdc",
  measurementId: "G-C6Y7BB6F87"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp);