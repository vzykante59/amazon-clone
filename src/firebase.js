import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsgvtIe0h3RpICno42WTTgQzmeVH4r9pE",
  authDomain: "challenge-67650.firebaseapp.com",
  databaseURL: "https://challenge-67650.firebaseio.com",
  projectId: "challenge-67650",
  storageBucket: "challenge-67650.appspot.com",
  messagingSenderId: "916723698695",
  appId: "1:916723698695:web:47108579287aec06bdaea2",
  measurementId: "G-02481P4Z5B",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

export { db, auth };
