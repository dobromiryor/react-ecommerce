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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user ', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;