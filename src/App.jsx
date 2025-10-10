import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Participate from './pages/Participate.jsx'
import Scroll from './components/Scroll.jsx'
import Contactus from './pages/Contactus.jsx'
import Photowall from './pages/Photowall.jsx'
import { Secretriate } from './pages/Secretriate.jsx'
export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Scroll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/participate' element={<Participate />} />
          <Route path='/Photowall' element={<Photowall />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/secreteriate' element={<Secretriate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
