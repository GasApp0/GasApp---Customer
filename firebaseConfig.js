// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJFZCK6a6q9qoqgOVLhTVm-BqAGMWLnHQ",
  authDomain: "gasapp-811d2.firebaseapp.com",
  projectId: "gasapp-811d2",
  storageBucket: "gasapp-811d2.appspot.com",
  messagingSenderId: "690848410304",
  appId: "1:690848410304:web:dfe4c67614146922ed1b25",
  measurementId: "G-NJTR1BGF0M"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getAuth(FIREBASE_APP);