import React from 'react';
import logo from './logo.svg';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

//initialize firebase app using the config in firebaseConfig file
const firebaseApp = firebase.initializeApp(firebaseConfig);


//setup the providers to support access the auth library
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function App() {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = this.props;
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
    </header>
  </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
