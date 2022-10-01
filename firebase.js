// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxs1dGBIGelbi9W0XCiA5zHcHWbAgbmA",
  authDomain: "fir-auth-88369.firebaseapp.com",
  projectId: "fir-auth-88369",
  storageBucket: "fir-auth-88369.appspot.com",
  messagingSenderId: "1076573272051",
  appId: "1:1076573272051:web:3a969068e65570a06f8486"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
