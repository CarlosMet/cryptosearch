import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {TbArrowsDoubleSwNe} from 'react-icons/tb'
import {AiFillDollarCircle} from 'react-icons/ai'


const TrendingPage = () => {
    const [trend, setTrend]= useState({})
    const params = useParams()
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${params.trendingId}?localization=false&sparkline=true`
    const [badge, setBadge] = useState({name:"USD", symbol: "US Dollar", price:trend.market_data?.current_price.usd})
    const [inputData, setInputData] = useState(1)
    const [borderColor, setBorderColor] = useState("border-gray-400")
    const [borderColor1, setBorderColor1] = useState("border-gray-400")
    const [borderColor2, setBorderColor2] = useState("border-gray-400")
    

    const borderChange = ()=>{
        setBadge({name:"USD", symbol: "US Dollar", price:trend.market_data?.current_price.usd})
        setBorderColor("border-2 border-green-400")
        setBorderColor1("border-gray-400")
        setBorderColor2("border-gray-400")
    }

    const borderChange1 = ()=>{
        setBadge({name:"Bitcoin", symbol: "BTC", price:trend.market_data?.current_price.btc.toFixed(8)})
        setBorderColor1("border-2 border-green-400")
        setBorderColor2("border-gray-400")
        setBorderColor("border-gray-400")        
    }

    const borderChange2 = ()=>{
        setBadge({name:"EUR", symbol: "€", price:trend.market_data?.current_price.eur})
        setBorderColor2("border-2 border-green-400")
        setBorderColor("border-gray-400")
        setBorderColor1("border-gray-400")
    }
    
    const inputChangeHandler = (e)=>{        
        setInputData(e.target.value)
    }
    

    useEffect(()=>{
         fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            setTrend(response)
        })
    },[apiUrl])
  return (
    <div className='w-[90%] xl:w-[80%] m-auto'>
       <div className='flex gap-2 items-center mb-6'>
            <div>
                <img src={trend.image?.small} alt="" />
            </div>
            <div className=''>
                <p className='text-2xl font-semibold'>{trend.name}</p>
                <p className='text-gray-500 text-sm uppercase'>({trend.symbol})</p>
            </div>
       </div>

        <div className='flex gap-4 items-center'>
            <p className='text-3xl font-bold'>{trend.market_data?.current_price.usd} US$</p>
            {trend.market_data?.price_change_percentage_1h_in_currency.usd > 0
            ? <p className='text-green-500'>{trend.market_data?.price_change_percentage_1h_in_currency.usd}%</p>
            : <p className='text-red-500'>{trend.market_data?.price_change_percentage_1h_in_currency.usd}%</p>
            }            
        </div>

        <div className='flex gap-1'>            
            <p className='text-gray-500'>{trend.market_data?.current_price.btc.toFixed(8)}</p>
            <img className='w-5' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
            {trend.market_data?.price_change_percentage_1h_in_currency.btc > 0
            ? <p className='text-green-500'>{trend.market_data?.price_change_percentage_1h_in_currency.btc}%</p>
            : <p className='text-red-500'>{trend.market_data?.price_change_percentage_1h_in_currency.btc}%</p>
            }
        </div>
        <h2 className='mt-6 mb-1 text-gray-400 font-bold text-lg'>Converter from {trend.name} to USD </h2>
            {/* converter */}
        <div className={`flex flex-col md:flex-row rounded-2xl border border-gray-400 justify-between overflow-hidden mb-12`}>
            
           <div className='flex justify-between items-center border border-r-2 w-[100%] md:w-[50%]'>

           

           <div className='px-9  flex py-5 gap-2 items-center'>

                <div className=''>
                    <img className='w-16 md:w-14 lg:w-10' src={trend.image?.small} alt="" />
                </div>
                <div>
                    <p>{trend.name}</p>
                    <p className='text-gray-400'>{trend.symbol}</p>
                </div>
                
            </div>
            <div>
                <input onChange={inputChangeHandler} className='text-xl bg-transparent' type="number" placeholder={inputData} />
            </div>
           </div>

            <div className='w-[50%]'>
                <div className='flex gap-2 ml-10 my-2'>
                    <button onClick={borderChange} className={`rounded-xl border ${borderColor} px-2 py-0`}>usd</button>
                    <button onClick={borderChange1} className={`rounded-xl border ${borderColor1} px-2 py-0`}>btc</button>
                    <button onClick={borderChange2} className={`rounded-xl border ${borderColor2} px-2 py-0`}>eur</button>
                </div>
            <div className='second w-full flex py-6 justify-between items-center'>
                
                
                <div className='px-9 flex items-center gap-2'>

                    <div>
                        <AiFillDollarCircle color='green' size={45}  />
                    </div>

                    <div>
                        <p className='font-semibold'>{badge.name}</p>
                        <p className='text-gray500'>{badge.symbol}</p>
                    </div>
                </div>

                <div>
                    <input  className='bg-transparent' type="number" value={badge.price*inputData} />
                </div>

            </div>
            </div>

        </div>        

        <div className='mt-4'>
            <p>{trend.description?.en}</p>            
        </div>

    </div>
  )
}

export default TrendingPage