
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import {Routes, Route} from 'react-router-dom'
import Home from './Routes/Home';
import Signin from './Routes/Signin'
import Signup from './Routes/Signup'
import Account from './Routes/Account'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CoinPage from './Routes/CoinPage';
import Footer from './Components/Footer';
import { AuthContextProvider } from './context/AuthContext';
import TrendingPage from './Routes/TrendingPage';
import Compare from './Components/Compare';
import Calculator from './Routes/Calculator';


function App() {
  const [quantity, setQuantity] = useState(15)
  const [coins, setCoins] = useState([])
  const [coinsP, setCoinsP] = useState([])
  const [err, setErr] = useState(false)
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${quantity}&page=1&sparkline=true`
  const apiUrl2 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
  const getQuantity = (event)=>{
    setQuantity(event)
  }
  useEffect(()=>{
    fetch(apiUrl).then(res=> res.json()).then((response) => {
      setCoins(response)      
    }).catch(err => {
      console.log(err)
      console.log(err)
      setErr(true)
    })

    fetch(apiUrl2).then(res=> res.json()).then((response) => {
      setCoinsP(response)      
    }).catch(err => {
      console.log(err)
      console.log(err)
      setErr(true)
    })

  }, [apiUrl])

  return (
    <ThemeProvider >
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home error = {err} getQuantity ={getQuantity} coins ={coins} coinsP ={coinsP} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />   
        <Route path='/compare' element={<Compare coins={coinsP} />}  />
        <Route path='/calculator' element={<Calculator coins={coinsP} />}/>
        <Route path='/coin/:coinId' element={<CoinPage />} >
          <Route path=':coinId' />
        </Route>     
        <Route path='/trending/:trendingId' element={<TrendingPage />} >
          <Route path=':trendingId' />
        </Route> 
      </Routes>      
      <Footer />
      </AuthContextProvider>
    </ThemeProvider>         
  );
}

export default App;
