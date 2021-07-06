import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARnHLj93bSVSepnNfa-UC8frmIJWchxn0",
    authDomain: "totlics.firebaseapp.com",
    projectId: "totlics",
    storageBucket: "totlics.appspot.com",
    messagingSenderId: "284231036701",
    appId: "1:284231036701:web:d0f08b46f2930cb5c5fbf4",
    measurementId: "G-DSK2JSF62L"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();