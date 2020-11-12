import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB4ntIlgGOf9RSAUzfzCeo-sc1qCuz7aG4",
  authDomain: "agenda-crud-e08ad.firebaseapp.com",
  databaseURL: "https://agenda-crud-e08ad.firebaseio.com",
  projectId: "agenda-crud-e08ad",
  storageBucket: "agenda-crud-e08ad.appspot.com",
  messagingSenderId: "12671917854",
  appId: "1:12671917854:web:a48d1a7b6adde4b1f5330f",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

//Conexion a la base de datos firestore
export const db = fb.firestore();
