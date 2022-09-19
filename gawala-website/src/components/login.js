import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from 'react-router-dom';
import {getuserdata} from '../firebase interface/getstocks'
import {userid,userstocks,usermoney,setsedata} from '../firebase interface/sessionstate'

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

  

const Lggincom = () => {
    const [email, setemail] = React.useState("");
    const [pass, setpass] = React.useState("");
    const [validation, setvalidation] = React.useState("");
    
    const handleChangemail = event => {
        setemail(event.target.value);
    }
    const handleChangepass = event => {
        setpass(event.target.value);
    }
    if(validation=="logedin")
    {
        return <Redirect to='/Mystocks' />
              

    }
  
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <div>
        <TextField
          required
          id="standard-required"
          label="Email"
          value={email}
          onChange={handleChangemail}
          
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Password"
          value={pass}
          onChange={handleChangepass}
          variant="standard"
        />
        <Button onClick={() => {
            signInWithEmailAndPassword(auth, email, pass)
            .then(async (userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              const data=await getuserdata(email)
              console.log(data);
              setsedata(email,data['money'],data['stocks'])
              setvalidation('logedin')
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              
            });
    
  }} variant="contained">Login</Button>
       
      </div>
    </Box>
  )
}


export default Lggincom