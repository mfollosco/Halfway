import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBSBDr6BOvdJO4Y5AhZJ-kzQU3NrmtJVE",
  authDomain: "halfway-a6c8d.firebaseapp.com",
  projectId: "halfway-a6c8d",
  storageBucket: "halfway-a6c8d.appspot.com",
  messagingSenderId: "914484605993",
  appId: "1:914484605993:web:65968567c05777bcb61838",
  measurementId: "G-7P59W92MS8"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};