import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from './DataContext'
import * as serviceWorker from "./serviceWorker";

import firebase from 'firebase/app';

import 'firebase/firestore';
import { firebaseConfig } from "./firebaseconfig";
import { FirebaseAppProvider, preloadFirestore } from "reactfire";



// const preloadSDKs = firebase => {
//   return Promise.all([
//     preloadFirestore(firebase, firestore => {
//       return firestore().settings({host: 'localhost:9099', ssl:false})
//     })
//   ]);
// };






ReactDOM.render(
  <React.StrictMode>

    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
