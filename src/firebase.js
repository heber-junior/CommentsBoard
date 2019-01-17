import firebase from 'firebase/app'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyCu80J2-gCRfxbGmem-mr0xhBSHRKHPsqk",
    authDomain: "comments-devreact-hbgjr.firebaseapp.com",
    databaseURL: "https://comments-devreact-hbgjr.firebaseio.com",
    projectId: "comments-devreact-hbgjr",
    storageBucket: "comments-devreact-hbgjr.appspot.com",
    messagingSenderId: "236131139434"
  };

  firebase.initializeApp(config)

  export const database = firebase.database()