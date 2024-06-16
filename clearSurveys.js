import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5c6QDQLwWyvSMH1Q_jMZGxIHLGErKRAQ",
   authDomain: "survey-app-47833.firebaseapp.com",
   projectId: "survey-app-47833",
   storageBucket: "survey-app-47833.appspot.com",
   messagingSenderId: "985685536713",
   appId: "1:985685536713:web:44cc70af6d060d4f530218",
   measurementId: "G-QTFP2K22TH"
 };

console.log("Initializing Firebase app...");
initializeApp(firebaseConfig);
const db = getFirestore();
console.log("Firebase app initialized.");

async function clearSurveysCollection() {
  console.log("Fetching surveys collection...");
  const surveysCol = collection(db, "surveys");
  const surveySnapshot = await getDocs(surveysCol);
  console.log(`Fetched ${surveySnapshot.docs.length} documents from surveys collection.`);

  console.log("Deleting documents...");
  const batch = writeBatch(db);

  surveySnapshot.docs.forEach((doc) => {
    console.log(`Deleting document with ID: ${doc.id}, data: ${JSON.stringify(doc.data())}`);
    batch.delete(doc.ref);
  });

  await batch.commit();
  console.log("Documents deleted.");
}

console.log("Running clearSurveysCollection function...");
clearSurveysCollection();

