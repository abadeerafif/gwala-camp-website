import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

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
const db = getFirestore(app);

export async function getstocks(callbackfn) {
    console.log("run");
    const output=[];
    const querySnapshot = await getDocs(collection(db, "stocks"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    
    output.push({id:doc.id,data:doc.data()})
    });
    //callbackfn(output)
    return output

}