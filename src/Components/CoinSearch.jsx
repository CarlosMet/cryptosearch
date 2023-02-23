import React from 'react'
import { useState } from 'react'
import {AiOutlineStar, AiFillCaretDown} from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import CoinItem from './CoinItem'


const CoinSearch = (props) => {
    const [search, setSearch] = useState('')
    const [selectedValue, setSelectedValue] = useState(15)
    
    const filterHandle = (event)=>{
        props.getQuantity(event.target.value)
        setSelectedValue(event.target.value)
    }
  return (
    <div className='rounded-div' id='crypto'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right mb-2'>            
            <h1 className='text-2xl font-bold'>Search coins</h1>
          <div className='flex gap-2'>
          <label>Show coins</label>
            <select value={selectedValue} className='h-[25px] border border-b-2 rounded-lg shadow-lg text-black bg-slate-100' onChange={filterHandle} name="select" id="">
                <option value="10">10</option> 
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <form action="" onSubmit={(e)=>{e.preventDefault()}}>
                <input 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='search...'
                    className='border border-input shadow-xl rounded-md bg-slate-100' 
                />    
                            
            </form>
          </div>
            
            
        </div>
        
        <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {props.coins
            // eslint-disable-next-line array-callback-return
            .filter((value) => {
              if (search === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase()) || value.symbol.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch