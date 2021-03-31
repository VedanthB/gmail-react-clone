import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDA4ZNxG67KfTlORwp1z2vZW8GiRPRU6mc",
    authDomain: "clone-react-f0bf1.firebaseapp.com",
    projectId: "clone-react-f0bf1",
    storageBucket: "clone-react-f0bf1.appspot.com",
    messagingSenderId: "239142236271",
    appId: "1:239142236271:web:b6ce773e3a075cc88d1d9a",
    measurementId: "G-4S585P0WNL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GithubAuthProvider();

  export  { db, auth, provider };