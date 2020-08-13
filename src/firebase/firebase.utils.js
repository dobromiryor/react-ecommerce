import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2KPQSBynGwUEidEv5DjTPvPxCv6rupvU",
    authDomain: "react-ecommerce-5e479.firebaseapp.com",
    databaseURL: "https://react-ecommerce-5e479.firebaseio.com",
    projectId: "react-ecommerce-5e479",
    storageBucket: "react-ecommerce-5e479.appspot.com",
    messagingSenderId: "190174077122",
    appId: "1:190174077122:web:d5e17bd0ca712417b35b5b",
    measurementId: "G-69R5H816Q2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;