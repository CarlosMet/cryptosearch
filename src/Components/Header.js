import React from 'react'
import logo from '../logo.svg';
import ThemeToggle from './ThemeToggle';


const Header = () => {
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div>
      <a href='#crypto'>Cryptocurrency</a>
    </div>

    <ThemeToggle />

    
  </header>
  )
}

export default Header