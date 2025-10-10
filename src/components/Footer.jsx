import React from 'react'
import image from '../assets/image.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#521C0D] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={image} alt="Logo" className="h-24" />
        </div>

        {/* Links */}
        <ul className="flex flex-col font-[roboto] md:flex-row justify-center gap-4 md:gap-6 text-lg">
         <Link to="/"><li className="hover:text-blue-300 cursor-pointer">Home</li></Link> 
          <Link to={"/about"}>
              <li className="hover:text-blue-300 cursor-pointer">About</li>
          
          </Link>
          <Link to={"/participate"}>
              <li className="hover:text-blue-300 cursor-pointer">Participate</li>
        
          </Link>
          <Link to={"/Committee"}>
                              <li className="hover:text-blue-300 cursor-pointer">Committee</li>

          </Link>
          <Link to={"/Sce"}>
                              <li className="hover:text-blue-300 cursor-pointer">Committee</li>

          </Link>
          <Link to={"/photowall"}>
                              <li className="hover:text-blue-300 whitespace-nowrap cursor-pointer">Photo Wall </li>
          </Link>

          <Link to={"/contactus"}>
                    <li className="hover:text-blue-300 cursor-pointer">Contact</li>

          </Link>
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  )
}
