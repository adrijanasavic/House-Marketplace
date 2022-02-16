// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyD7Ro8QqppGrBOBTXL-NtGM9j3Y6Wkp11U",
    authDomain: "house-marketplace-736f3.firebaseapp.com",
    projectId: "house-marketplace-736f3",
    storageBucket: "house-marketplace-736f3.appspot.com",
    messagingSenderId: "1013694942390",
    appId: "1:1013694942390:web:88cf3b17207cfbf89d2a17",
    measurementId: "G-N70BFJVSS6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()