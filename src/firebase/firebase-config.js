import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCHhIPksHvFiloi4t__w3DpzOIgOHS2zcU",
    authDomain: "react-app-cursos-adf58.firebaseapp.com",
    projectId: "react-app-cursos-adf58",
    storageBucket: "react-app-cursos-adf58.appspot.com",
    messagingSenderId: "738545717239",
    appId: "1:738545717239:web:f8fc390e770d0c1f74e8f2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}