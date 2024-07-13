// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCu4wxV0f-Hx_wakdBofJomX0QOGwXojTY",
  authDomain: "unithrift-9ed30.firebaseapp.com",
  projectId: "unithrift-9ed30",
  storageBucket: "unithrift-9ed30.appspot.com",
  messagingSenderId: "159697961953",
  appId: "1:159697961953:web:8cb7e1a7185e62d10408a0",
  measurementId: "G-JL6JTCM82P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app)
export default app