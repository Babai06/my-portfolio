import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZA2j1pkErrTGS2LdGFpPViA4trLAZtJE",
  authDomain: "my-portfolio-3330a.firebaseapp.com",
  projectId: "my-portfolio-3330a",
  storageBucket: "my-portfolio-3330a.appspot.com",
  messagingSenderId: "428250218881",
  appId: "1:428250218881:web:9a33e4cc3ab671beafe880",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
