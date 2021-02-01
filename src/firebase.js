import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPlaEMeJwS5YXZMv-J17JU3p8ZwGehlFw",
    authDomain: "get-8132b.firebaseapp.com",
    projectId: "get-8132b",
    storageBucket: "get-8132b.appspot.com",
    messagingSenderId: "937367316167",
    appId: "1:937367316167:web:c6afa07ed57c525c7d40e2"
});

let db = firebaseApp.firestore();
    
 export {db};