// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr5Or9JZ5B-y5o7oCfON_k2ZW3H6cB-cM",
  authDomain: "tapswap-479bc.firebaseapp.com",
  projectId: "tapswap-479bc",
  storageBucket: "tapswap-479bc.appspot.com",
  messagingSenderId: "679209174292",
  appId: "1:679209174292:web:95ebfd4671b962b0386e01",
  measurementId: "G-8YK9FB8ZDJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app);
console.log("Firestore initialized:", db);

export { db };
