// Trainer says firebase or google documentation in general is very hard to read and technical.

// Import the functions you need from the SDKs you need
// create an app instance for you based on a config
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ5MUnE3tvXc9gUGUvsbB1Wpz8DhWhnyU",
    authDomain: "crown-clothing-db-d21f0.firebaseapp.com",
    projectId: "crown-clothing-db-d21f0",
    storageBucket: "crown-clothing-db-d21f0.appspot.com",
    messagingSenderId: "241413569735",
    appId: "1:241413569735:web:29d014a1ee2c33254b12e2"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // basically set parameter what google wants
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
