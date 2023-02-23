import React from 'react'
import { useState, useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { useParams } from 'react-router-dom';



const CoinPage = (props) => {  
  const [coin, setCoin]= useState({})
  const [sparkColor, setSparkColor] = useState("")
  const [sparkData, setSparkData] = useState([])
  const params = useParams()
  const APIURL = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
  const selectHandler = (e)=> {
    const oneDay =  coin.market_data?.sparkline_7d.price.slice(0,23)
    const sevenDays = coin.market_data?.sparkline_7d.price
    console.log(oneDay)
    console.log(e.target.value) 
    e.target.value === "1" ? setSparkData(oneDay) : setSparkData(sevenDays)
    
  }
  useEffect(()=>{
    fetch(APIURL)
    .then( res => res.json())
    .then(response => {
      setCoin(response) 
       response.market_data?.price_change_percentage_24h > 0 ? setSparkColor("green") : setSparkColor("red")     
       setSparkData(response.market_data?.sparkline_7d.price)       
    })
  }, [APIURL])

  
  return (
    <div className='rounded-div my-12 pb-12'>
      <div className='flex py-8'>
        <img className='w-20 mr-8' src={coin.image?.large} alt='/' />
        <div>
          <p className='text-3xl font-bold'>{coin?.name}</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (
              <p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <label className='ml-6 mt-1 font-semibold'>Sparkline</label>
            <select onChange={selectHandler} name="" id="">
              <option value="7">7 Days</option>
              <option value="1">1 Days</option>              
            </select>
          </div>
          <div>
            <Sparklines data={sparkData}>
              <SparklinesLine color={sparkColor} />
            </Sparklines>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className='text-xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (24h)</p>
              {coin.market_data?.price_change_percentage_24h < 0 ? 
                <p className='text-red-500'>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                :<p className='text-green-500'>{coin.market_data?.price_change_percentage_24h.toFixed(2)}</p>}                
            </div>
               
            <div>
              <p className='text-gray-500 text-sm'>Price Change (7d)</p>
              {coin.market_data?.price_change_percentage_7d < 0 ? 
                <p className='text-red-500'>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                :<p className='text-green-500'>{coin.market_data?.price_change_percentage_7d.toFixed(2)}</p>}                
            </div>

            <div>
              <p className='text-gray-500 text-sm'>Price Change (14d)</p>
              {coin.market_data?.price_change_percentage_14d < 0 ? 
                <p className='text-red-500'>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>
                :<p className='text-green-500'>{coin.market_data?.price_change_percentage_14d.toFixed(2)}</p>}                
            </div>

           
          </div>
          <div className='flex justify-between py-4'>
          <div>
              <p className='text-gray-500 text-sm'>Price Change (30d)</p>
              {coin.market_data?.price_change_percentage_30d < 0 ? 
                <p className='text-red-500'>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>
                :<p className='text-green-500'>{coin.market_data?.price_change_percentage_30d.toFixed(2)}</p>}                
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (60d)</p>
              {coin.market_data?.price_change_percentage_60d < 0 ? 
                <p className='text-red-500'>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>
                :<p className='text-green-500'>{coin.market_data?.price_change_percentage_60d.toFixed(2)}</p>}                
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (1y)</p>
              {coin.market_data?.price_change_percentage_1y < 0 ? 
                <p className='text-red-500'>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
                :<p className='text-green-500'>{coin.market_data?.price_change_percentage_1y.toFixed(2)}</p>}                
            </div>
          </div>
         
        </div>
      </div>

      
      
    </div>
  );
};

export default CoinPage;