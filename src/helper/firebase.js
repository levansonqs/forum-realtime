import * as firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD8utfgWWUZsH4YGY6UZyE6ZaLVwGBNY34",
  authDomain: "tech-7bf29.firebaseapp.com",
  databaseURL: "https://tech-7bf29.firebaseio.com",
  projectId: "tech-7bf29",
  storageBucket: "",
  messagingSenderId: "631331783754",
  appId: "1:631331783754:web:4451023a9cc9c6a0"
};

// Initialize Firebase
export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());
