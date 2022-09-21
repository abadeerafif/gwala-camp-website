import React from 'react'
import ResponsiveAppBar from '../components/Appbar';
import MultiActionAreaCard from '../components/stockcard'
import {getstocks,salestock} from '../firebase interface/getstocks'
import {userid,userstocks,usermoney} from '../firebase interface/sessionstate'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Redirect } from 'react-router-dom';



const Mystocks =() => {
  const [stocks, setstocks] = React.useState([]);
  
 
  
  
  async function fetchData()
    {
      
     
      const s= await getstocks()
      const userstocksoutput=[]
      console.log(userstocks);
      for (let i = 0; i < s.length; i++) {
        console.log("abadeer");
        
       

        for(const property in userstocks) {
            console.log(property);
            console.log(s[i]);

            
            if(property==s[i]['id'])
            {
              console.log("paa",s[i]);
                console.log(property);
                
                
                s[i]['soldstocks']=userstocks[property]
                userstocksoutput.push(s[i])
                break;

            }
            
          }
         
        
            
        
        }
        console.log("abadeeeeeeer",userstocksoutput);
        setstocks(userstocksoutput)
        
    }

    
      

    
  React.useEffect( ()=>{
   
    fetchData()
   

  }, [])
  if(userid==null || userstocks==null||usermoney==null)
      {
        console.log("abadeer redi");
        return <Redirect to='/' />
      }

  
  
   
  
  
  
  console.log("abadder: ",usermoney);
  console.log("aaaaaaaaaaa",stocks);
  
  return (

    <div>

    <ResponsiveAppBar ></ResponsiveAppBar>
    {stocks.map(({id,data,soldstocks})=>(<MultiActionAreaCard key={id} name={id} price={data['price']} image= {data['logo']} desc ={data['disc'] }numbersold={soldstocks} sale={"sale"} total={data['numberofstocks']} refrefn={fetchData} ></MultiActionAreaCard>))}
    
    
    
     
    </div>
  )
}


export default Mystocks