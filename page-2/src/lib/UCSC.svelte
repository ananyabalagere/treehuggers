<script>
  import { onMount } from 'svelte';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';

  // Initialize Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyAobsnee9HLdWRIe7b2ZzVoyEab0q2l_8c",
  authDomain: "test0-cb8c5.firebaseapp.com",
  projectId: "test0-cb8c5",
  storageBucket: "test0-cb8c5.appspot.com",
  messagingSenderId: "82222829928",
  appId: "1:82222829928:web:6e43dd913ee9f3356846dd",
  measurementId: "G-L9VZ4RDW7C"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();
  const collectionRef = db.collection('location-UCSC');

  let images = [];
  let index = 0;

  onMount(async () => {
      const querySnapshot = await db.collection("location-UCSC").get();
      const newImages = [];
      querySnapshot.forEach((doc) => {
          const imageData = {
          id: doc.id,
          IMG: doc.get("IMG"),
          };
          newImages.push(imageData);
      });
      images = newImages; // Assign the new array to the existing variable
      console.log(images);
  });

  const nextImage = () => {
    index = (index + 1) % images.length;
  };

  const incrementClicksAndNextImage = async () => {
    const docRef = db.collection("location-UCSC").doc(images[index].id);
    await docRef.update({
      CLICKS: firebase.firestore.FieldValue.increment(1)
    });
    nextImage();
  };
</script>

<main>
  <p>{images.length}</p>
  {#if images.length > 0}
    <img src={images[index].IMG} alt="ucsc"/>
    <button on:click={nextImage}>Next</button>
    <button on:click={incrementClicksAndNextImage}>Like and Next</button>
  {/if}
</main>