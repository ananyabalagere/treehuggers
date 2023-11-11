<script>
  import { onMount } from 'svelte';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/firestore';

  // Initialize Firebase
  const firebaseConfig = {
    // Your Firebase configuration here
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();

  let images = [];
  let index = 0;

  onMount(async () => {
    const querySnapshot = await db.collection("images").get();
    querySnapshot.forEach((doc) => {
      images.push(doc.data());
    });
  });

  const nextImage = () => {
    index = (index + 1) % images.length;
  };

  const incrementClicksAndNextImage = async () => {
    const docRef = db.collection("images").doc(images[index].id);
    await docRef.update({
      CLICKS: firebase.firestore.FieldValue.increment(1)
    });
    nextImage();
  };
</script>

<main>
  {#if images.length > 0}
    <img src={images[index].IMG} alt="Image" />
    <button on:click={nextImage}>Next</button>
    <button on:click={incrementClicksAndNextImage}>Like and Next</button>
  {/if}
</main>