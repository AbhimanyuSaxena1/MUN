import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/image.png';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [showForm, setShowform] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleBurgerClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 800) {
        setOpacity(false);
      } else {
        setOpacity(true);
      }
      if (currentScroll === 0 || currentScroll > 850) {
        setShowNavbar(true);
      } else {
        if (currentScroll > lastScroll) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);
  return (
    <div className='w-full h-full'>
    <nav
      className={`
    w-full fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-3
    transform transition-transform duration-500 ease-in-out
    ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
    ${opacity ? 'bg-black/40 bg-opacity-70 backdrop-blur-xs  ' : 'bg-transparent'}
  `}
    >

      <Link to='/'><div className="flex items-center z-50">
        <img width={80} src={img} alt="Logo" className="rounded-lg" />
      </div></Link>


      <div className="flex items-center space-x-8 z-50 font-[roboto]">
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <Link to="/" className="text-white hover:text-blue-300 text-lg transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-300 text-lg transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/participate" className="text-white hover:text-blue-300 text-lg transition">
              Participate
            </Link>
          </li>
          <li>
            <Link to="/photowall" className="text-white hover:text-blue-300 text-lg transition">
              Photo Wall
            </Link>
          </li><li>
            <Link to="/participate" className="text-white hover:text-blue-300 text-lg transition">
              Leader Board
            </Link>
          </li>
          <li>
            <Link to="/committee" className="text-white hover:text-blue-300 text-lg transition">
committee
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="text-white hover:text-blue-300 text-lg transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
    

       <Link className='hover:scale-110 transition-all duration-200 group' to="https://docs.google.com/forms/d/e/1FAIpQLSeU9hjAeNuoQAClS0yakrKA0zpbdMyqh9LOaBRAXYNmtdbBOw/viewform?usp=sharing&ouid=118079012721441868563">
        <button 
         className={`ml-4 text-white border-1 group-hover:border-3 shadow-2xl border-[#521C0D] px-5 py-2 rounded-full transition  cursor-pointer    ${opacity ? 'bg-[#f8de7c] !text-[#521C0D]' : 'bg-[#f8de7c] !text-[#521C0D]'}
`}>
          Register
        </button>
       </Link>


        <div className="md:hidden">
          <button className="text-white hover:text-blue-300 focus:outline-none" onClick={handleBurgerClick}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    
    </nav>
    <div className={`fixed inset-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm bg-opacity-80 z-50 flex flex-col items-center justify-center transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} md:hidden`} style={{ pointerEvents: showMobileMenu ? 'auto' : 'none' }}>
          <button onClick={handleBurgerClick} className="absolute top-6 right-6 text-white text-6xl focus:outline-none">&times;</button>
          <ul className="flex flex-col font-[roboto] space-y-8 text-center">
            <li>
              <Link  to="/" className="text-white text-3xl" onClick={handleBurgerClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-3xl" onClick={handleBurgerClick}>About</Link>
            </li>
            <li>
              <Link to="/participate" className="text-white text-3xl" onClick={handleBurgerClick}>Participate</Link>
            </li>
             <li>
              <Link to="/photowall" className="text-white text-3xl" onClick={handleBurgerClick}>Photo Wall</Link>
            </li>
             <li>
              <Link to="/participate" className="text-white text-3xl" onClick={handleBurgerClick}>Leader Board</Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white text-3xl" onClick={handleBurgerClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}
