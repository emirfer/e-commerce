import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAI4pj43hV-ROYsQXEy0QmmavmBobBEUFc",
    authDomain: "e-commerce-20fda.firebaseapp.com",
    databaseURL: "https://e-commerce-20fda.firebaseio.com",
    projectId: "e-commerce-20fda",
    storageBucket: "e-commerce-20fda.appspot.com",
    messagingSenderId: "513070918964",
    appId: "1:513070918964:web:8e3a46a7f76880b1214961",
    measurementId: "G-L0584H09QR"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
