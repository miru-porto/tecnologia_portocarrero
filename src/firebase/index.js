import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAuwDqlH1QbyDri3MDtvVkkkMNrKdWkyJY",
  authDomain: "coderhouse-bijouterie.firebaseapp.com",
  projectId: "coderhouse-bijouterie",
  storageBucket: "coderhouse-bijouterie.appspot.com",
  messagingSenderId: "981025051227",
  appId: "1:981025051227:web:1a244db9909946441b657e",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
/*
process.env.REACT_APP_NOT_SECRET_CODE
ocultar keys
apiKey: "AIzaSyAuwDqlH1QbyDri3MDtvVkkkMNrKdWkyJY",
appId: "1:981025051227:web:1a244db9909946441b657e",
*/