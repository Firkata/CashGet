import * as firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyB3pqGHnwB2t5KjmPAz-mfwyB5RD9kqLjM",
    authDomain: "cash-pick-21d1a.firebaseapp.com",
    databaseURL: "https://cash-pick-21d1a.firebaseio.com",
    projectId: "cash-pick-21d1a",
    storageBucket: "cash-pick-21d1a.appspot.com",
    messagingSenderId: "797277113779",
    appId: "1:797277113779:web:b1ca493b8e211b06f84fc6",
    measurementId: "G-1B92FXHV1C"
});

export default app;
