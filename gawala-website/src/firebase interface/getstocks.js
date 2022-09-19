import { collection, getDocs,getDoc,doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { runTransaction } from "firebase/firestore";
import {userid,userstocks,usermoney} from '../firebase interface/sessionstate'

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
export async function getuserdata(email) {
    



    const docRef = doc(db, "teams", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
  //   doc.data() will be undefined in this case
    console.log("No such document!");
    }

}
export async function getstockdata(stockname) {
    



    const docRef = doc(db, "stocks", stockname);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
  //   doc.data() will be undefined in this case
    console.log("No such document!");
    }

}
export async function buystock(email,usermoney,stockprice,stockname) {
    
   

    //if all ok 
        // increase stock price
        // decrease user money
    //else 
        //inform user
    try {
        await runTransaction(db, async (transaction) => {
        const docRefstock = doc(db, "stocks", stockname);
        const sfDocstock = await transaction.get(docRefstock);
        
        if (!sfDocstock.exists()) {
            throw "Document does not exist!";
        }
        //check if price changed
        if(stockprice!=sfDocstock.data().price)
        {

        }

        const docRefuser = doc(db, "teams", email);
        const sfDocuser = await transaction.get(docRefuser);
        
        if (!sfDocuser.exists()) {
            throw "Document does not exist!";
        }


        //check user money in database
        if(sfDocuser.data().moneny<stockprice)
        {

        }
          
        const nestockprice = sfDocstock.data().price + 50;
        const nestockqu = sfDocstock.data().soldstocks + 1;
        transaction.update(docRefstock, { price: nestockprice , soldstocks:nestockqu});
        const usmoney = sfDocuser.data().money-sfDocstock.data().price;
        if(sfDocuser.data().stocks[stockname]==null)
        {
            sfDocuser.data().stocks[stockname]=0

        }
        console.log( sfDocuser.data().stocks);
        var stocksuser=sfDocuser.data().stocks
        if(stocksuser[stockname]==null)
        {
            stocksuser[stockname]=0

        }
        stocksuser[stockname]++;
        
        console.log( stocksuser);
        await transaction.update(docRefuser, { stocks: stocksuser , money:usmoney});
        userstocks=stocksuser
        usermoney=usmoney
        });
        
        console.log("Transaction successfully committed!");

        } catch (e) {
        console.log("Transaction failed: ", e);
    }
          
    



   
}