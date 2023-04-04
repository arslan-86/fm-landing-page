import React from 'react'
import logo from '../assets/logo.svg'
import hamburgerIcon from '../assets/icon-hamburger.svg'
import closeIcon from '../assets/icon-close.svg'

function Navbar({state, setSate}) {

   function handleClick(){
      setSate(prevState => !prevState)
   }
  return (
   // NavBar
    <nav className='relative md:container mx-auto p-6 '> 

    {/* Flex box */}
      <div className="flex items-center justify-between">

         {/* Logo */}
         <div className="pt-2">
            <img src={logo} alt="Logo" />
         </div>

         {/* Menu Items */}
         <div className="hidden md:flex space-x-6">
            <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
            <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
         </div>

         {/* Button */}
         <a href="#"
         className='hidden md:block p-4 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
         >Get Started</a>

         <button className='block hamburger focus:oultine-none md:hidden'>
            <img src={state ? closeIcon : hamburgerIcon} onClick={handleClick} />

         </button>

      </div>

      <div id="menu" className={`${state ? 'flex' : 'hidden'} absolute left-6 right-6  flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center drop-shadow-md`}>
         <a href="#">Pricing</a>
         <a href="#">Product</a>
         <a href="#">About Us</a>
         <a href="#">Community</a>
      </div>
    </nav>
  )
}

export default Navbar