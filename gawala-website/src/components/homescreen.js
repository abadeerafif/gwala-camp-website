import React from 'react'
import ResponsiveAppBar from '../components/Appbar';
import MultiActionAreaCard from '../components/stockcard'
import {getstocks} from '../firebase interface/getstocks'
import {userid,userstocks,usermoney} from '../firebase interface/sessionstate'



const Home  =() => {
  const [stocks, setstocks] = React.useState([]);
  
  async function fetchData()
    {
      const s= await getstocks(setstocks)
      setstocks(s)
      

    }
  React.useEffect( ()=>{
   
    fetchData()
   

  }, [])

  
  
   
  
  
  
  console.log("abadder: ",usermoney);
  
  return (

    <div>

    <ResponsiveAppBar ></ResponsiveAppBar>
    {stocks.map(({id,data})=>(<MultiActionAreaCard name={id} price={data['price']} image= {data['logo']} desc ={data['disc'] }numbersold={data['soldstocks']} total={data['numberofstocks']} refrefn={fetchData} sale={"buy"} ></MultiActionAreaCard>))}
    
    
    
     
    </div>
  )
}


export default Home