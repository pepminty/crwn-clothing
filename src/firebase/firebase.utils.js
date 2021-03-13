import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrFSCeVDDr-Tj1SvfEhATyis50BpjnDYY",
  authDomain: "crwn-db-ee4e7.firebaseapp.com",
  projectId: "crwn-db-ee4e7",
  storageBucket: "crwn-db-ee4e7.appspot.com",
  messagingSenderId: "600242342898",
  appId: "1:600242342898:web:cc0e7e69daaa512067396b",
  measurementId: "G-T3M73S5VV8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


