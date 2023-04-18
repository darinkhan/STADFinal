import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqRSVrairAC7e8am4wfp1cVJeZmFpPRGc",
  authDomain: "stadfinal.firebaseapp.com",
  projectId: "stadfinal",
  storageBucket: "stadfinal.appspot.com",
  messagingSenderId: "154987048465",
  appId: "1:154987048465:web:a87dacc83f51901064cbb0",
  measurementId: "G-1N0WH8WZ7Q"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const getServerTimeStamp = serverTimestamp;
