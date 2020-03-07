import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNhJ6jKoiK-vVkh6Evi6wRv2cYL9-ka1c",
  authDomain: "crwn-db-4caf4.firebaseapp.com",
  databaseURL: "https://crwn-db-4caf4.firebaseio.com",
  projectId: "crwn-db-4caf4",
  storageBucket: "crwn-db-4caf4.appspot.com",
  messagingSenderId: "93536999084",
  appId: "1:93536999084:web:98bc3eb9b40bd53175b109",
  measurementId: "G-QS0XBQGGF6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
