import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';


import logo from '../sgslogo.jpg'
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
    const [shopass, setshpass] = React.useState(false);
    const [validation, setvalidation] = React.useState("");
    const [loading, setloading] = React.useState(false);
    
    const handleChangemail = event => {
        setemail(event.target.value);
    }
    const handleClickShowPassword = () => {
      if(shopass)
        setshpass(false);
      else
        setshpass(true);

    };
    const handleChangepass = event => {
        setpass(event.target.value);
    }
    if(validation=="logedin")
    {
        return <Redirect to='/stocks' />
              

    }
    if(loading)
    {
       return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress style={{position:"absolute",top :"45%",left:"45%",height:" 20%" ,width: "20%"}} />
        </Box>
      );
    }
  
  return (
    <div >
    <div style={{position:"absolute",top :"25%",left:"30%"}}>
    <img style={{height:" 50%" ,width: "50%"}} src={logo}/>
    </div>
    
    <div style={{position:"absolute",top :"40%"}}>
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
          style = {{width: "98%"}} 
        />
        
        <FormControl sx={{ m: 1, width: '98%' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
          
            id="filled-adornment-password"
            type={shopass ? 'text' : 'password'}
            value={pass}
            onChange={handleChangepass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {shopass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button 
        style={{position:"relative",left:"39%"}}
          
          onClick={() => {
            setloading(true)
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
              setloading(false)
              
            });
    
  }} variant="contained">Login</Button>
       
      </div>
    </Box>
    </div>
    </div>
  )
}


export default Lggincom