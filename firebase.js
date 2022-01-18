import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxkjuV9rpgMBIXgVWadldJkCgfuD-eVws",
    authDomain: "fire-base-project-1-f03b5.firebaseapp.com",
    databaseURL: "https://fire-base-project-1-f03b5.firebaseio.com",
    projectId: "fire-base-project-1-f03b5",
    storageBucket: "fire-base-project-1-f03b5.appspot.com",
    messagingSenderId: "744814362266",
    appId: "1:744814362266:web:ada20639ae0f15a27f6923",
    measurementId: "G-KZE25G6FX3"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };