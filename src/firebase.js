import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBM36annknTSJXs79Aiw02znCk9SNR26OI",
    authDomain: "firechat-88cfa.firebaseapp.com",
    projectId: "firechat-88cfa",
    storageBucket: "firechat-88cfa.appspot.com",
    messagingSenderId: "787966136259",
    appId: "1:787966136259:web:7eacc2a5ee1b3d46ec3776",
    measurementId: "G-CRQEJ53NZD"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()


export { db, auth }