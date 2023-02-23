import React from 'react'
import { useState, useEffect } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';


const Compare = ({coins}) => {
    const [selectedCoin, setSelectedCoin] =useState("bitcoin")
    const [selectedCoin2, setSelectedCoin2] =useState("bitcoin")
    const [firstCoin, setFirstCoin] = useState([])
    const [secondCoin, setSecondCoin] = useState([])
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoin}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    const apiUrl2 = `https://api.coingecko.com/api/v3/coins/${selectedCoin2}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    const selectHandle = (e)=>{
        setSelectedCoin(e.target.value)
    }
    const selectHandle1 = (e)=>{
        setSelectedCoin2(e.target.value)
    }
    useEffect(()=>{
        fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            setFirstCoin(response)
        })
        fetch(apiUrl2)
        .then(res => res.json())
        .then(response => {
            setSecondCoin(response)
        })
    }, [selectedCoin, selectedCoin2,apiUrl,apiUrl2])
    

  return (
    <>
    <br /><br />
    <div className='compare w-[350px] md:w-[680px] lg:w-[850px] xl:w-[1050px] rounded-2xl m-auto'>
        <h2 className='text-center font-bold text-xl my-9'>
                Compare different cryptocurrencies
        </h2>
        <div className='gap-4 flex flex-col md:flex-row w-[350px] md:w-[680px] lg:w-[850px] xl:w-[1050px] rounded-2xl justify-between m-auto overflow-hidden'>
            
            <div className='first-coin py-4 mt-2 w-[100%] px-5'>
                <select className='bg-transparent' onChange={selectHandle}>
                    {coins.map((opt, idx)=> {
                        return (
                            <option key={idx}>{opt.id}</option>
                        )
                    })}
                </select>

                <div className='flex mt-5'>

                    <div>
                        <img src={firstCoin.image?.small} alt="" />
                    </div>
                    <div>
                        <p className='font-bold'>{firstCoin.name}</p>
                        <p className='text-gray-500'>{firstCoin.symbol}</p>
                    </div>

                </div>
                <div className='w-[100%]'>
                    <p className='mt-2 mb-1 font-bold'>${firstCoin.market_data?.current_price.usd}</p>
                </div>
                <div className='w-[100%]'>
                    <Sparklines data={firstCoin.market_data?.sparkline_7d.price}>
                        <SparklinesLine color="teal" />
                    </Sparklines>
                </div>

                <div className='flex w-[100%] gap-4 mt-5 justify-between'>
                    <div>
                        <p className='font-bold'>Market rank</p>
                        <p>{firstCoin.market_cap_rank}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Hashing Algorithm</p>
                        <p>{firstCoin.hashing_algorithm
                        ? firstCoin.hashing_algorithm
                        : null
                    }</p>
                    </div>   
                    <div>
                        <p className='font-bold'>Market cap</p>
                        <p>${firstCoin.market_data?.market_cap.usd.toLocaleString()}</p>
                    </div>            
                    
                </div>


                <div className='flex w-[100%] gap-16 mt-5'>
                    
                    <div>
                        <p className='font-bold'>24h High</p>
                        <p>${firstCoin.market_data?.high_24h.usd.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className='font-bold'>24h High</p>
                        <p>${firstCoin.market_data?.high_24h.usd.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Genesis date</p>
                        <p>{firstCoin.genesis_date}</p>
                    </div>
                   
                </div>

                <div className='flex w-[100%] mt-5'>
                    <div>
                        <p className='font-bold'>Price Change (24h)</p>
                        <p>{firstCoin.market_data?.price_change_percentage_24h}%</p>
                    </div>
                    <div>
                        <p className='font-bold'>Price Change (7d)</p>
                        <p>{firstCoin.market_data?.price_change_percentage_7d}%</p>
                    </div>
                    <div>
                        <p className='font-bold'>Price Change (14d)</p>
                        <p>{firstCoin.market_data?.price_change_percentage_14d}%</p>
                    </div>

                    <p></p>
                    <p></p>
                </div>

            </div>

            <div className='second-coin mt-2 py-4 w-[100%]'>
                <select className='bg-transparent' onChange={selectHandle1}>
                        {coins.map((opt, idx)=> {
                            return (
                                <option key={idx}>{opt.id}</option>
                            )
                        })}
                    </select>

                    <div className='flex mt-5'>

                        <div>
                            <img src={secondCoin.image?.small} alt="" />
                        </div>
                        <div>
                            <p className='font-bold'>{secondCoin.name}</p>
                            <p className='text-gray-500'>{secondCoin.symbol}</p>
                        </div>

                    </div>
                    <div className='w-[100%]'>
                        <p className='font-bold mt-2 mb-1 '>${secondCoin.market_data?.current_price.usd}</p>
                    </div>
                    <div className='w-[100%]'>
                        <Sparklines data={secondCoin.market_data?.sparkline_7d.price}>
                            <SparklinesLine color="teal" />
                        </Sparklines>
                    </div>

                    <div className='flex w-[100%] gap-4 mt-5 justify-between'>
                        <div>
                            <p className='font-bold'>Market rank</p>
                            <p>{secondCoin.market_cap_rank}</p>
                        </div>
                        <div>
                            <p className='font-bold'>Hashing Algorithm</p>
                            <p>{secondCoin.hashing_algorithm
                            ? secondCoin.hashing_algorithm
                            : null
                        }</p>
                        </div>   
                        <div>
                            <p className='font-bold'>Market cap</p>
                            <p>${secondCoin.market_data?.market_cap.usd.toLocaleString()}</p>
                        </div>            
                        
                    </div>


                    <div className='flex w-[100%] gap-16 mt-5'>
                        
                        <div>
                            <p className='font-bold'>24h High</p>
                            <p>${secondCoin.market_data?.high_24h.usd.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className='font-bold'>24h High</p>
                            <p>${secondCoin.market_data?.high_24h.usd.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className='font-bold'>Genesis date</p>
                            <p>{secondCoin.genesis_date}</p>
                        </div>
                    
                    </div>

                    <div className='flex w-[100%] mt-5'>
                        <div>
                            <p className='font-bold'>Price Change (24h)</p>
                            <p>{secondCoin.market_data?.price_change_percentage_24h}%</p>
                        </div>
                        <div>
                            <p className='font-bold'>Price Change (7d)</p>
                            <p>{secondCoin.market_data?.price_change_percentage_7d}%</p>
                        </div>
                        <div>
                            <p className='font-bold'>Price Change (14d)</p>
                            <p>{secondCoin.market_data?.price_change_percentage_14d}%</p>
                        </div>

                        <p></p>
                        <p></p>
                    </div>
                </div>

        </div>
            <p className='font-semibold m-4 text-center'>1 {firstCoin.name} = {(firstCoin.market_data?.current_price.usd)/(secondCoin.market_data?.current_price.usd)} {secondCoin.name}</p>


    </div>
    </>
  )
}

export default Compare