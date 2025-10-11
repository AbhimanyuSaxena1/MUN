import React from 'react'
import image from '../assets/image.png'
import logo from '../assets/logo.png'

export default function Aboutcontent() {
  return (
    <div>
      <section className="bg-white px-6  py-10 space-y-10">


        <div className="relative w-full py-16 overflow-hidden">

          <div className="absolute inset-0 flex justify-center items-center ">
            <img
              src={image}
              alt="Hero Watermark"
              className="h-52 w-auto opacity-17 invert"
            />
          </div>


          <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
            <h2 className="text-4xl  font-extrabold text-gray-800 mb-8 border-b-4 inline-block border-black-400 pb-2">
              Why SVVV International MUN?
            </h2>

            <div className="text-lg leading-relaxed text-gray-700 space-y-6 text-center">
              <p>
                Step into a space where diplomacy knows no boundaries, where young leaders rise as architects of change,
                and where dialogue builds bridges across nations. The Shri Vaishnav Vidyapeeth Vishwavidyalaya International
                Model United Nations (SVVVIMUN) is more than just a conference—it’s a three-day journey of intellect,
                collaboration, and leadership.
              </p>

              <p>
                At SVVVIMUN, we believe in nurturing the next generation of changemakers. Delegates don’t just debate—they
                grow into confident speakers, critical thinkers, and empathetic leaders. From mastering the art of public
                speaking to navigating the complexities of international relations, every moment at SVVVIMUN is designed
                to challenge, inspire, and transform.
              </p>

              <p>
                Here, legacy meets leadership—a tradition of excellence guiding the leaders of tomorrow.
                Join us, and be part of a platform that will not only broaden your perspective but also empower you to
                become a catalyst for meaningful change.
              </p>

              <p className="font-semibold text-gray-800">
                The future of diplomacy begins with you—at SVVVIMUN 2025.
              </p>
            </div>
          </div>
        </div>


        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl  font-extrabold text-gray-800 mb-6 border-b-4 inline-block border-black-400 pb-2">
            Our Motto
          </h2>
          <p className="text-xl italic text-gray-700">
            Where Legacy Meets Leadership: Cultivating dialogue, diplomacy, and the leaders of tomorrow
          </p>
        </div>


        <div className="relative w-full py-10 overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={logo}
              alt="Hero Watermark"
              className="h-62 w-auto opacity-25 "
            />
          </div>
          <div className="  relative z-10 max-w-5xl mx-auto text-center px-4">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-4 inline-block border-black-400 pb-2">
              About Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV)
            </h2>
            <p className="text-lg text-gray-700">
              Established in 2015 under the Madhya Pradesh Niji Vishwavidyalaya (Sthapana Avam Sanchalan) Adhiniyam,
              Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore, is a private university with a vision to shape
              a better future for humanity through quality education, research, and innovation.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Guided by its mission to develop socially responsible citizens, SVVV emphasizes value-based education
              rooted in endurance, excellence, fairness, honesty, and transparency. As a multi-faculty university, it
              continues to serve the diverse academic needs of society while preparing students to thrive in an
              interconnected world.
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}
