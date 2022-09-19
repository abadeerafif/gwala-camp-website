import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBj2LRr_SmVP1Aw7lxid8xVo6wy77jFha0",
    authDomain: "gawaladahabcamp.firebaseapp.com",
    projectId: "gawaladahabcamp",
    storageBucket: "gawaladahabcamp.appspot.com",
    messagingSenderId: "982432386374",
    appId: "1:982432386374:web:4bf358a4cc63c6efdae947"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
export async function loginfn(email,pass) {
    await signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    return true;
    
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    return false;
    
    });
}