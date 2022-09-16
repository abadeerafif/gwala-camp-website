import React from 'react'
import ResponsiveAppBar from '../components/Appbar';
import MultiActionAreaCard from '../components/stockcard'

const Home = () => {
  
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <MultiActionAreaCard></MultiActionAreaCard>
    <MultiActionAreaCard></MultiActionAreaCard>
    <MultiActionAreaCard></MultiActionAreaCard>
    <MultiActionAreaCard></MultiActionAreaCard>
    </div>
  )
}


export default Home