import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5c6QDQLwWyvSMH1Q_jMZGxIHLGErKRAQ",
   authDomain: "survey-app-47833.firebaseapp.com",
   projectId: "survey-app-47833",
   storageBucket: "survey-app-47833.appspot.com",
   messagingSenderId: "985685536713",
   appId: "1:985685536713:web:44cc70af6d060d4f530218",
   measurementId: "G-QTFP2K22TH"
 };

initializeApp(firebaseConfig);
const db = getFirestore();
export default db
