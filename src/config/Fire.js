import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8ylxoLfv_vBI4e1ixjHjFp85I28LbSjY",
  authDomain: "piw-lab6-9e961.firebaseapp.com",
  projectId: "piw-lab6-9e961",
  storageBucket: "piw-lab6-9e961.appspot.com",
  messagingSenderId: "544613808476",
  appId: "1:544613808476:web:310f9d43fc3c73a4756999",
  measurementId: "G-632TMX1G69",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export default fire;

export const addUserData = async (user, userData) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .set({
      ...userData,
    });
};

export const getUserData = async (user) => {
  return firestore.collection("users").doc(user.uid).get();
};

export const updateUserData = async (user, userData) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .update({
      ...userData,
    });
};
