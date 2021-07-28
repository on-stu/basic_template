import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPwFrVqF1XhWpAlePYfGRT0gwPSBAzvYs",
  authDomain: "telestration-a2f94.firebaseapp.com",
  projectId: "telestration-a2f94",
  storageBucket: "telestration-a2f94.appspot.com",
  messagingSenderId: "123370603212",
  appId: "1:123370603212:web:d91337002ff3430f38b869",
  measurementId: "G-43Y533L2YY"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();