// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm2uyAd0Anmb6gC-Xf9sVlQ2PuvztW02Y",
  authDomain: "house-marketplace-app-34c07.firebaseapp.com",
  projectId: "house-marketplace-app-34c07",
  storageBucket: "house-marketplace-app-34c07.appspot.com",
  messagingSenderId: "451792258890",
  appId: "1:451792258890:web:989166aedf6f49bb7fa3b3",
  measurementId: "G-Y9QC83DC2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()