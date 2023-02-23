import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Calculator = ({coins}) => {
    const [value, setValue] = useState(1)
    const [selectedCoin, setSelectedCoin] = useState("bitcoin")
    const [selectedCoin2, setSelectedCoin2] = useState("bitcoin")
    const [coinData, setCoinData] = useState([])
    const [coinData2, setCoinData2] = useState([])
    let apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoin}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    let apiUrl2 = `https://api.coingecko.com/api/v3/coins/${selectedCoin2}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    const selectHandle = (e)=>{
        setSelectedCoin(e.target.value)
    }
    const selectHandle2 = (e)=>{
        setSelectedCoin2(e.target.value)
    }

    const valueHandle=(e)=> {
        setValue(e.target.value)
    }

    useEffect(()=>{
        fetch(apiUrl)
        .then(response => response.json())
        .then(res => {
            setCoinData(res)
        })

        fetch(apiUrl2)
        .then(response => response.json())
        .then(res => {
            setCoinData2(res)
        })
    }, [apiUrl, selectedCoin, selectedCoin2, apiUrl2])

    return (
    <div className='py-12 w-[100%] max-w-[350px] md:max-w-[690px] lg:max-w-[890px] xl:max-w-[1100px] m-auto'>
        <div className='rounded-xl py-12 px-6 compare'>
            <div>
                <input onChange={valueHandle} className='border border-gray-400 rounded-lg bg-transparent text-gray-500 px-2 py-1 text-xl' placeholder='1' type="number" />
            </div>

            <div className='flex w-[100%] my-5'>
                
                <div className='first-value w-[100%]'>
                    <div className='flex gap-1 items-center'>
                            <img className='w-5' src={coinData.image?.small} alt={coinData.id} />
                            <p className='text-gray-500 text-sm ml-1'>${coinData.market_data?.current_price.usd.toLocaleString()}</p>
                    </div>
               
                    <select onChange={selectHandle} className='border border-gray-500 rounded-lg w-[65%] bg-transparent text-gray-400'>
                        {coins.map((coin, idx)=>{
                            return(
                                <option>{coin.id}</option>
                            )
                        })}
                    </select>
                </div>

                <div className='second-value w-[100%]'>

                        <div className='flex gap-1 items-center'>
                            <img className='w-5' src={coinData2.image?.small} alt={coinData2.id} />
                            <p className='text-gray-500 text-sm ml-1'>${coinData2.market_data?.current_price.usd.toLocaleString()}</p>
                        </div>
                        <select onChange={selectHandle2} className='border border-gray-500 rounded-lg w-[65%] bg-transparent' name="" id="">
                            {coins.map((coin2, idx)=>{
                                return(
                                    <option>{coin2.id}</option>
                                )
                            })}
                        </select>
                </div>
            </div>
                <div>
                    <p className='font-bold'>{value} {coinData.name} = {((coinData.market_data?.current_price.usd/coinData2.market_data?.current_price.usd).toFixed(9))*value} {coinData2.name} </p>
                </div>       
        </div>         
        

    </div>
  )
}

export default Calculator