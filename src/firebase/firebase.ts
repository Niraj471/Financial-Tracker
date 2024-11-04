// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl7zgtYPeYycxOKo7K7X3qM1JQ0vKPrnI",
  authDomain: "financial-tracker-86d3a.firebaseapp.com",
  projectId: "financial-tracker-86d3a",
  storageBucket: "financial-tracker-86d3a.appspot.com",
  messagingSenderId: "623690078279",
  appId: "1:623690078279:web:002767590489efa387f962"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export  const db = getFirestore(app);