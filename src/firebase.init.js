// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8-IQfpe40HkHfX05IX-Yd4IeJloqHIrA",
    authDomain: "bicycle-parts-baf4f.firebaseapp.com",
    projectId: "bicycle-parts-baf4f",
    storageBucket: "bicycle-parts-baf4f.appspot.com",
    messagingSenderId: "612784714219",
    appId: "1:612784714219:web:91b792aff060c357aa69ae"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;