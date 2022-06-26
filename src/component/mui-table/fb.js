import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDsGwKUauBItDD5WlcwK0PQQQvU8xUZv_g",
  authDomain: "aram-326907.firebaseapp.com",
  databaseURL: "https://aram-326907-default-rtdb.firebaseio.com",
  projectId: "aram-326907",
  storageBucket: "aram-326907.appspot.com",
  messagingSenderId: "181874102480",
  appId: "1:181874102480:web:5ecced8e0e52e43af84ed5"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const messaging = getMessaging();

const storage = getStorage();
const database = getDatabase(app);
const auth = getAuth();

export { app, db, storage, auth,database };