import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineMenu, AiOutlineClose, AiOutlineDown} from 'react-icons/ai'
import logo from '../logo.svg'
import {TbArrowsDoubleSwNe} from 'react-icons/tb'
import {MdCompare} from 'react-icons/md'
import {BsBook} from 'react-icons/bs'
import './navbar.css'
const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const handleToggleMenu = ()=> {
        setVisible(!visible)
    }
    const closeMenu = ()=>{
        setVisible(!visible)
    }
  return (    
    <div className='px-3 lg:px-12 flex items-center justify-between h-20 font-bold mb-8'>
        <Link to= '/'>
            <div className='flex items-center'>
                <img className='App-logo w-20 lg:w-24' src={logo} alt=""/>
                <h1 className='text-2xl md:text-2xl lg:text-3xl font-extrabold z-15'>CryptoSearch</h1>
            </div>
        </Link>
        <div className='hidden md:flex gap-2 lg:gap-5'>
            <Link to={'/'}>
                Cryptocurrency
            </Link>            

            <div className='products'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <p>Products</p>
                    <AiOutlineDown className='mt-1' />
                </div>
                <div className='absolute z-20 bg-white hid'>
                    <Link to='/calculator'>
                        <div className='gap-2 font-normal ml-5 flex items-center my-3 hover:bg-gray-200'>
                            <TbArrowsDoubleSwNe className='rotate-45' />
                            <p>Converter</p>
                        </div>
                    </Link>
                    <Link to='/compare'>
                         <div className='gap-2 font-normal ml-5 flex items-center mb-3 hover:bg-gray-200'>
                            <MdCompare />
                            <p>Compare</p>
                        </div>
                    </Link>
                    <Link to='/compare'>
                         <div className='gap-2 font-normal ml-5 flex items-center hover:bg-gray-200'>
                            <BsBook />
                           <div>
                                <p>Learn & earn</p>
                                <p className='text-xs'>By Coin Market Cap</p>
                           </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
        <div className='hidden md:flex items-center'>
            <ThemeToggle />
            <Link to='/signin' className='p-4 hover:text-accent'>Sign In</Link>
            <Link to='/signup' className='bg-buttons text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</Link>   
        </div>
        <div onClick={handleToggleMenu} className='block md:hidden cursor-pointer z-50'>
            {visible ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }
        </div>
       {
        visible 
        ? <div className='absolute bg-primary w-full left-0 top-4 h-full z-40'>
            <div>
                <ul className='mt-20 flex flex-col gap-3 w-[90%] m-auto'>
                    <li onClick={closeMenu}>
                        <Link to={'/'}>
                            Cryptocurrency
                        </Link>
                        <hr></hr>
                    </li>
                   
                    <li>
                        <div className='products'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <p>Products</p>
                                <AiOutlineDown className='mt-1' />
                            </div>
                        <div className='absolute z-20 bg-white hid ml-24'>
                            <Link to='/calculator'>
                                <div onClick={closeMenu} className='gap-2 font-normal ml-5 flex items-center my-3 hover:bg-gray-200'>
                                    <TbArrowsDoubleSwNe className='rotate-45' />
                                    <p>Converter</p>
                                </div>
                                <hr />
                            </Link>
                            <Link to='/compare'>
                                <div onClick={closeMenu} className='gap-2 font-normal ml-5 flex items-center mb-3 hover:bg-gray-200'>
                                    <MdCompare />
                                    <p>Compare</p>
                                </div>
                                <hr />
                            </Link>
                            <Link to='/compare'>
                                <div onClick={closeMenu} className='gap-2 font-normal ml-5 flex items-center hover:bg-gray-200'>
                                <BsBook />
                                    <div>
                                        <p>Learn & earn</p>
                                        <p className='text-xs'>By Coin Market Cap</p>
                                    </div>
                                </div>
                                <hr />
                            </Link>
                    </div>
                </div>

                        <hr></hr>
                    </li>
                </ul>
            </div>
            <div>
                <div className='rounded-lg w-7 pl-6 pr-12 m-auto my-11 border border-gray-400 flex items-center text-center'>
                    <ThemeToggle />
                </div>
                <div onClick={handleToggleMenu} className='border border-b rounded-xl mx-10 text-center my-2 text-lg hover:cursor-pointer'>
                    <Link to={"/signin"}>
                        Sign In
                    </Link>
                </div>
                <div onClick={handleToggleMenu} className='text-btnText border border-b rounded-xl mx-10 text-center my-2  bg-buttons text-lg font-bold hover:cursor-pointer'>
                    <Link to='/signup'>
                        Sign Up
                    </Link>
                </div>
            </div>

        </div>
        : <div className='hidden'></div>
       }
        
    </div>
  )
}

export default Navbar