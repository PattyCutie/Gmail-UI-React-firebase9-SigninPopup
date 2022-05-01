import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    doc,
    orderBy,
    limit,
    onSnapshot,
    query,
} from 'firebase/firestore';

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';


const firebaseConfig = {
  //firebase app config details//
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export {
    db,
    auth,
    googleProvider,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    doc,
    orderBy,
    limit,
    onSnapshot,
    query,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
};
