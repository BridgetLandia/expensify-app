import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhKU6AeuggD7IRYXaxfzqNWdcL9hy78J4",
    authDomain: "expensify-962a5.firebaseapp.com",
    databaseURL: "https://expensify-962a5.firebaseio.com",
    projectId: "expensify-962a5",
    storageBucket: "expensify-962a5.appspot.com",
    messagingSenderId: "440636995164",
    appId: "1:440636995164:web:ef57866ac403db0b"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {firebase, database as default};

  // firebase.database().ref().set({ 
  //   Name: 'Brigitta'});