import React from 'react'
import BlurText from "./BlurText";

import about from '../assets/about.jpg'
export default function AboutUshero() {
  return (
    <div>
      <div className="relative w-full h-screen">
              <img
                src={about}
                className="h-full w-full object-cover opacity-40"
                alt="About SVVVIMUN"
              />
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
               <BlurText
  text="ABOUT SVVVIMUN"
  delay={200}
  animateBy="letters"
  direction="top"
  className='text-white  text-center !font-[times]   text-[2.1rem]  leading-none     lg:text-[10rem] md:text-[10rem]'
/>
              </div>
            </div>
    </div>
  )
}
