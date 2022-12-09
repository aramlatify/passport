import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDF9p_eQxpI9nlBNbgroIlQWNXNAtWW0fg",
  authDomain: "passportgarmian.firebaseapp.com",
  databaseURL: "https://passportgarmian-default-rtdb.firebaseio.com",
  projectId: "passportgarmian",
  storageBucket: "passportgarmian.appspot.com",
  messagingSenderId: "198463130018",
  appId: "1:198463130018:web:10b11e8db7e89c8ce60afb",
  measurementId: "G-53YF7C5L2M"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const messaging = getMessaging();

const storage = getStorage();
const database = getDatabase(app);
const auth = getAuth();

export { app, db, storage, auth,database };
