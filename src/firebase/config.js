import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQLwoiWpAwws4OKg0vrZV3GBS4sPyKLTg",
  authDomain: "cooking-ninja-site-c1607.firebaseapp.com",
  projectId: "cooking-ninja-site-c1607",
  storageBucket: "cooking-ninja-site-c1607.appspot.com",
  messagingSenderId: "319738403410",
  appId: "1:319738403410:web:7eb7400bfb1fffc229dd8b"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
