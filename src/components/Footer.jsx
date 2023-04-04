import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import youtube from '../assets/icon-youtube.svg'
import pinterest from '../assets/icon-pinterest.svg'

function Footer() {
  return (
    <footer className='bg-veryDarkBlue'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
         <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div>
               <img src={logo} className='h-8' />
            </div>

            <div className="flex justify-center space-x-4">
               <a href="#">
                  <img src={facebook} className='h-8' alt="" />
               </a>
               <a href="#">
                  <img src={youtube} className='h-8' alt="" />
               </a>
               <a href="#">
                  <img src={instagram} className='h-8' alt="" />
               </a>
               <a href="#">
                  <img src={pinterest} className='h-8' alt="" />
               </a>
               <a href="#">
                  <img src={twitter} className='h-8' alt="" />
               </a>
            </div>
         </div>


         <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
               <a href="#" className="hover:text-brightRed">Home</a>
               <a href="#" className="hover:text-brightRed">Pricing</a>
               <a href="#" className="hover:text-brightRed">Products</a>
               <a href="#" className="hover:text-brightRed">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
               <a href="#" className="hover:text-brightRed">Careers</a>
               <a href="#" className="hover:text-brightRed">Community</a>
               <a href="#" className="hover:text-brightRed">Privacy Policy</a>
            </div>
         </div>

      </div>
    </footer>
  )
}

export default Footer