import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDa7dDFHZwS-KVSLT1F8-q5Dv4_ecUjmQU",
    authDomain: "chat-application-c71b0.firebaseapp.com",
    projectId: "chat-application-c71b0",
    storageBucket: "chat-application-c71b0.appspot.com",
    messagingSenderId: "466898241222",
    appId: "1:466898241222:web:d7af1c8cd51161a5aa79c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();