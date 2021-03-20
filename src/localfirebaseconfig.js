import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey:"AIzaSyAUHiuqZS72tVFG_qDeIs2TUnVbE_A6aTY",
    authDomain: "greaterdemand-dev.firebaseapp.com",
    databaseURL: "https://greaterdemand-dev.firebaseio.com",
    projectId: "greaterdemand-dev",
    storageBucket: "greaterdemand-dev.appspot.com",
    messagingSenderId: "262629809948",
    appId: "1:262629809948:web:88cb05c5fc53921b9224d9",
  });

  const db = firebase.firestore();
  const auth = firebase.auth;

  if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', 8080);
    auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
  }

export default firebase;
export { db, auth };