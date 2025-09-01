import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAO7zzV48Cu2LCK9h6icnXEQ19Ch_1a-kE",
    authDomain: "cplb-goals.firebaseapp.com",
    projectId: "cplb-goals",
    storageBucket: "cplb-goals.firebasestorage.app",
    messagingSenderId: "3859899895",
    appId: "1:3859899895:web:f910a70db8342e6bc13af2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)