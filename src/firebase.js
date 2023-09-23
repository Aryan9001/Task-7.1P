import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAap-dvpToGjjGHBNS4eZQy0K1gcCz0qMs",
    authDomain: "sit313-8bb38.firebaseapp.com",
    projectId: "sit313-8bb38",
    storageBucket: "sit313-8bb38.appspot.com",
    messagingSenderId: "385658034220",
    appId: "1:385658034220:web:78061991a5d50675fe1989",
    measurementId: "G-7L21227HX3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };