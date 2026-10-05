import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";


import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";


const firebaseConfig = {

  apiKey:
    "AIzaSyCl_prq8KKEuBDHuCKLYlA3_hLbxt4USY0",

  authDomain:
    "cyber-research-tracker.firebaseapp.com",

  projectId:
    "cyber-research-tracker",

  storageBucket:
    "cyber-research-tracker.firebasestorage.app",

  messagingSenderId:
    "152454180016",

  appId:
    "1:152454180016:web:a0bdbd513a8d5b7aecdf75",

  measurementId:
    "G-6GEWPTWQQM"

};


const app =
  initializeApp(
    firebaseConfig
  );


const db =
  getFirestore(app);


export {
  db,
  collection,
  addDoc,
  getDocs
};
