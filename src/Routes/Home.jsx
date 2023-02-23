import React from 'react'
import CoinSearch from '../Components/CoinSearch'
import { useState } from 'react'
import Trending from '../Components/Trending'
import News from '../Components/News'
import Compare from '../Components/Compare'




const Home = (props) => {
  
  const getQuantity = (event)=>{
    props.getQuantity(event)
  }
  if(!props.err){
  return (
    <div>
        <News />
        <CoinSearch getQuantity= {getQuantity} coins ={props.coins} />
        <Compare coins={props.coinsP} />
        <Trending />
    </div>
  )}
  else{
    return (
      <div>
        
        <p className='text-red-500 text-center'>OOOPS!! coingecko is not working right now, try again later</p>
        <div className='flex gap-3 text-center justify-center mb-6'>
          <p className=''>the page might not work properly, go to the coingecko page to see more about it</p>
          <a className='text-accent text-decoration-line: underline' href="https://www.coingecko.com/es/api/documentation" target="_blink">coingecko</a>
        </div>        
        <CoinSearch getQuantity= {getQuantity} coins ={props.coins} />
        <Trending />
      </div>
    )
  }
}

export default Home