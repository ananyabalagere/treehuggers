<script>
  import { onMount } from 'svelte';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();
  const collectionRef = db.collection("location-SantaCruz");

  let images = [];
  let index = 0;

  onMount(async () => {
      const querySnapshot = await collectionRef.get();
      const newImages = [];
      querySnapshot.forEach((doc) => {
          const imageData = {
          id: doc.id,
          IMG: doc.get("IMG"),
          };
          newImages.push(imageData);
      });
      images = newImages;
      console.log(images);
  });

  const nextImage = () => {
    index = (index + 1) % images.length;
  };

  const incrementClicksAndNextImage = async () => {
    const docRef = collectionRef.doc(images[index].id);
    await docRef.update({
      CLICKS: firebase.firestore.FieldValue.increment(1)
    });
    nextImage();
  };
</script>

<main>
  <p>{images.length}</p>
  {#if images.length > 0}
    <img src={images[index].IMG} alt="santa cruz"/>
    <button on:click={nextImage}>Next</button>
    <button on:click={incrementClicksAndNextImage}>Like and Next</button>
  {/if}
</main>