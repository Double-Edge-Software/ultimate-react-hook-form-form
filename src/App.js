import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Result } from "./Result";
import { Header } from "./components/Header";
import { FirebaseAppProvider,preloadFirestore } from "reactfire";
import { firebaseConfig } from './firebaseconfig';
import firebase from 'firebase/app';



// const app = firebase.initializeApp(firebaseConfig);

// const db = 

// const preloadSDKs = firebase => {
//   return Promise.all([
//     preloadFirestore(firebase, firestore => {
//       return firestore().settings({host: 'localhost:8080', ssl:false})
//     })
//   ]);
// };


function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
