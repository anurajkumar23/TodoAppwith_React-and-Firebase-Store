import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMxpXFprH7sAX1kO5bIbHTr0PyC6y0ph4",
  authDomain: "todo-list-43689.firebaseapp.com",
  databaseURL: "https://todo-list-43689-default-rtdb.firebaseio.com",
  projectId: "todo-list-43689",
  storageBucket: "todo-list-43689.appspot.com",
  messagingSenderId: "807297963301",
  appId: "1:807297963301:web:f20f6c87ed7be55f1a76cc",
  measurementId: "G-GTSX2H1TYF"
};
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 