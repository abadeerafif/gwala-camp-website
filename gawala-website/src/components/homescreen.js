import React from 'react'
import ResponsiveAppBar from '../components/Appbar';
import MultiActionAreaCard from '../components/stockcard'
import {getstocks} from '../firebase interface/getstocks'



const Home  =() => {
  const [stocks, setstocks] = React.useState([]);
  React.useEffect( ()=>{
    async function fetchData()
    {
      const s= await getstocks(setstocks)
      setstocks(s)

    }
    fetchData()
   

  }, [])

  
  
   
  
  
  
  
  
  
  
  return (
    <div>

    <ResponsiveAppBar ></ResponsiveAppBar>
    {stocks.map(({id,data})=>(<MultiActionAreaCard name={id} price={data['price']} image= {data['logo']} desc =" this idkjdkjdkjndkjfnkjfnjkdn fjkdfkjbdkjfbkjdfn a great n"></MultiActionAreaCard>))}
    
    
    
     
    </div>
  )
}


export default Home