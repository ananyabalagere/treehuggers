import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAobsnee9HLdWRIe7b2ZzVoyEab0q2l_8c",
    authDomain: "test0-cb8c5.firebaseapp.com",
    projectId: "test0-cb8c5",
    storageBucket: "test0-cb8c5.appspot.com",
    messagingSenderId: "82222829928",
    appId: "1:82222829928:web:6e43dd913ee9f3356846dd",
    measurementId: "G-L9VZ4RDW7C"
  };
firebase.initializeApp(firebaseConfig);
// Assuming you have initialized Firebase and obtained a reference to your Firestore database
const db = firebase.firestore();

// Reference to the collection in the Firestore database
const collectionRef = db.collection('location-UCSC');

try {
  // Retrieve all documents in the collection
  const querySnapshot = await collectionRef.get();

  // Loop through each document
  /*querySnapshot.forEach(doc => {
    const imageLink = doc.data().IMG; // Assuming 'IMG' is the field name*/
    querySnapshot.forEach((doc) => {
        const imageData = {
          id: doc.id,
          IMG: doc.get("IMG"),
        };
        console.log('Image Link:', imageData);
  });
} catch (error) {
  console.error('Error retrieving documents:', error);
}

