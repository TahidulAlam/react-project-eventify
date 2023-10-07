import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvEIwyeYaojjOeSjtvAg2xnU8Y1ftxqZM",
  authDomain: "eventify-project.firebaseapp.com",
  projectId: "eventify-project",
  storageBucket: "eventify-project.appspot.com",
  messagingSenderId: "104280364473",
  appId: "1:104280364473:web:0e276d735bd9e037d55268",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
