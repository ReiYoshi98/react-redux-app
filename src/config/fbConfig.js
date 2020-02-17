 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDEcMAgbTqcMMwZnNImTNh4WyPQ9LfhtDY",
    authDomain: "project-plan-app-ba4b4.firebaseapp.com",
    databaseURL: "https://project-plan-app-ba4b4.firebaseio.com",
    projectId: "project-plan-app-ba4b4",
    storageBucket: "project-plan-app-ba4b4.appspot.com",
    messagingSenderId: "843676551537",
    appId: "1:843676551537:web:e57106b2db0d864b048ed0",
    measurementId: "G-2S3VF5QGEZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;