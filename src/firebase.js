import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCnEjvioQmrHErfC0O5jZA6sG3_VpA0HqY",
    authDomain: "do-dog.firebaseapp.com",
    databaseURL: "https://do-dog.firebaseio.com",
    projectId: "do-dog",
    storageBucket: "do-dog.appspot.com",
    messagingSenderId: "730130849201",
    appId: "1:730130849201:web:71a9a4ce28a99a1c3e7190"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;