// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAobsnee9HLdWRIe7b2ZzVoyEab0q2l_8c",
  authDomain: "test0-cb8c5.firebaseapp.com",
  projectId: "test0-cb8c5",
  storageBucket: "test0-cb8c5.appspot.com",
  messagingSenderId: "82222829928",
  appId: "1:82222829928:web:6e43dd913ee9f3356846dd",
  measurementId: "G-L9VZ4RDW7C"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();