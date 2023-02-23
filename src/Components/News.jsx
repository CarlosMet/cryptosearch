 import React from 'react'
 import BitcoinImg from './Bitcoin.webp'
 import Eth from './eth.webp'
 import Phone from './phone.jpg'
 import World from './world.jpg'
 
 const News = () => {
   return (
    <>
    
    <div className='grid grid-cols-1 place-items-center my-14 md:grid-cols-2 lg:grid-cols-4 max-w-[370px] md:max-w-[600px] lg:max-w-[1270px] 2xl:max-w-[1450px] m-auto justify-between'>

        <a href="https://news.bitcoin.com/bitcoin-non-farm-payrolls/" target="_blank">
          <div className='mt-4 card rounded-2xl w-[285px] h-[165px] lg:w-[245px] 2xl:w-[340px] overflow-hidden bg-transparent cursor-pointer group perspective'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                <div style={{backgroundImage:`url(${BitcoinImg})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}} className="w-full h-full absolute backface-hidden">
                    <div className='block px-4 h-full'><p className='mt-24 text-white text-3xl font-extrabold'></p></div>
                </div>
                <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-slate-900'>
                  <div>
                    <p className='text-gray-200 text-lg font-bold text-center '>Bitcoin price drops down below 20,000$</p>
                    <p className='text-gray-500 font-medium text-center mt-5 px-3'>Bitcoin once again slipped below $20,000, as market uncertainty rose ahead of Friday’s Non-farm payrolls report</p>
                  </div>
                </div>
                  
              </div>
          </div>
          <p className='text-gray-500 mt-1'><i>2022, september 1st</i></p>
          <p className='font-semibold'>Bitcoin.com</p>
        </a>
     
       <a target='_blank' href="https://decrypt.co/108791/ethereum-merge-almost-here-what-could-go-wrong">
        <div className='mt-4 card rounded-2xl w-[285px] h-[165px] lg:w-[245px] 2xl:w-[340px] overflow-hidden bg-transparent cursor-pointer group perspective'>
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
            <div style={{background:`url(${Eth})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="w-full h-full absolute backface-hidden">
                <p className='text-white text-2xl font-bold'></p>
            </div>
            <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-slate-900'>
              <p className='text-gray-200 text-center p-4 mt-10'>Learn more about the ethereum merge</p>
            </div>
          </div>
        </div>
        <p className='text-gray-500 mt-1'><i>2022, september 1st</i></p>
        <p className='font-semibold'>decrypt.co</p>
       </a>
     

      <a href="https://cryptonews.com/news/new-cryptocurrency.htm" target="_blank">
        <div className='mt-4 card rounded-2xl w-[285px] h-[165px] lg:w-[245px] 2xl:w-[340px] overflow-hidden bg-transparent cursor-pointer group perspective'>
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
            <div style={{background:`url(${Phone})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="w-full h-full absolute backface-hidden">
                
            </div>
            <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-slate-900'>
              <p className='text-gray-200 text-center p-4 mt-10'>Top cryptocurrencies to invest this month</p>
            </div>
          </div>
        </div>
        <p className='text-gray-500 mt-1'><i>2022, september 1st</i></p>
        <p className='font-semibold'>Bitcoin.com</p>
      </a>

      <a target='_blank' href="https://www.nytimes.com/2022/08/26/technology/crypto-ethereum-the-merge.html">
        <div className='mt-4 card rounded-2xl w-[285px] h-[165px] lg:w-[245px] 2xl:w-[340px] overflow-hidden bg-transparent cursor-pointer group perspective'>
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
            <div style={{background:`url(${World})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}} className="w-full h-full absolute backface-hidden">
                
            </div>
            <div className='absolute backface-hidden my-rotate-y-180 w-full h-full bg-slate-900'>
              <p className='text-gray-200 text-center p-4 mt-10'>Crypto world can´t wait for the merge</p>
            </div>
          </div>
        </div>
        <p className='text-gray-500 mt-1'><i>2022, september 1st</i></p>
        <p className='font-semibold'>Bitcoin.com</p>
      </a>

  </div>
  </>
    
   )
 }
 
 export default News