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
export const db = getFirestore();
const surveyData = [
  {
    id: 1,
    image: "img.jpg",
    man: 0,
    woman: 0,
    ageRange: {
      "0-15": 0,
      "16-20": 0,
      "21-35": 0,
      "36-50": 0,
      "51-70": 0,
    },
    Country: {
      America: 0,
      Africa: 0,
      Asia: 0,
      Australia: 0,
      Europe: 0,
    },
    title: "SurveyTitle 111111111111111111111",
    description: "SurveyDescription 1111111111111111111111",
    questions: [
      {
        id: 1,
        title: "QuestionName",
        options: [
          { name: "OptionNameOne", checked: false },
          { name: "OptionNameTwo", checked: false },
          { name: "OptionNameThree", checked: false },
        ],
      },
      {
        id: 2,
        title: "QuestionName",
        options: [
          { name: "OptionNameOne", checked: false },
          { name: "OptionNameTwo", checked: false },
          { name: "OptionNameThree", checked: false },
        ],
      },
    ],
  },
  {
    id: 2,
    image: "img.jpg",
    man: 0,
    woman: 0,
    ageRange: {
      "0-15": 0,
      "16-20": 0,
      "21-35": 0,
      "36-50": 0,
      "51-70": 0,
    },
    Country: {
      America: 0,
      Africa: 0,
      Asia: 0,
      Australia: 0,
      Europe: 0,
    },
    title: "SurveyTitle 22222222222222222222222222",
    description: "SurveyDescription 22222222222222222222",
    questions: [
      {
        id: 1,
        title: "QuestionName",
        options: [
          { name: "OptionNameOne", checked: false },
          { name: "OptionNameTwo", checked: false },
          { name: "OptionNameThree", checked: false },
        ],
      },
      {
        id: 2,
        title: "QuestionName",
        options: [
          { name: "OptionNameOne", checked: false },
          { name: "OptionNameTwo", checked: false },
          { name: "OptionNameThree", checked: false },
        ],
      },
    ],
  },
  {
    id: 3,
    image: "img.jpg",
    man: 0,
    woman: 0,
    ageRange: {
      "0-15": 0,
      "16-20": 0,
      "21-35": 0,
      "36-50": 0,
      "51-70": 0,
    },
    Country: {
      America: 0,
      Africa: 0,
      Asia: 0,
      Australia: 0,
      Europe: 0,
    },
    title: "SurveyThree",
    description: "SurveyDescription 33333333333333333333",
    questions: [
      {
        id: 1,
        title: "QuestionName",
        options: [
          { name: "OptionNameOne", checked: false },
          { name: "OptionNameTwo", checked: false },
          { name: "OptionNameThree", checked: false },
        ],
      },
      {
        id: 2,
        title: "QuestionName",
        options: [
          { name: "OptionNameOne", checked: false },
          { name: "OptionNameTwo", checked: false },
          { name: "OptionNameThree", checked: false },
        ],
      },
    ],
  },
];