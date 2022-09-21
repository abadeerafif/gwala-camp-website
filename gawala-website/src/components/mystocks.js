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



const Mystocks =() => {
  const [stocks, setstocks] = React.useState([]);
  
 
  
  
  async function fetchData()
    {
      const s= await getstocks(setstocks)
      console.log(userstocks);
      for (let i = 0; i < s.length; i++) {
        console.log("abadeer");
        
        var found=false

        for(const property in userstocks) {
            console.log(property);
            console.log(s[i]);

            
            if(property==s[i]['id'])
            {
                console.log(property);
                found=true
                s[i]['soldstocks']=userstocks[property]
                break;

            }
            
          }
          if(!found)
            {
                delete s[i];
            }
        
            
        
        }
        setstocks(s)
        
    }

    
      

    
  React.useEffect( ()=>{
   
    fetchData()
   

  }, [])

  
  
   
  
  
  
  console.log("abadder: ",usermoney);
  
  return (

    <div>

    <ResponsiveAppBar ></ResponsiveAppBar>
    {stocks.map(({id,data})=>(<MultiActionAreaCard name={id} price={data['price']} image= {data['logo']} desc ={data['disc'] }numbersold={data['soldstocks']} sale={"sale"} total={data['numberofstocks']} refrefn={fetchData} ></MultiActionAreaCard>))}
    
    
    
     
    </div>
  )
}


export default Mystocks