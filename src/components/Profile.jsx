import Harinorway from '../Images/HariNorway.jpg'
import Button from './Button'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full py-16">
        {/* Profile Image */}
        <div 
          className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full  transition duration-300 ease-in-out hover:scale-110 duration-500"
          data-aos="fade-right"
        >
          <img 
            src={Harinorway} 
            className="w-full h-full object-cover rounded-full border-8 border-gray-100 group-hover:border-gray-200 transition-all duration-300 shadow-lg"
            alt="Hari Profile pic"
          />
          <div className="absolute inset-0 rounded-full border-2 border-white/50 shadow-inner" />
        </div>

        {/* Text Content */}
        <div 
          className="text-center md:text-left space-y-4 md:space-y-5"
          data-aos="fade-left"
        >
          <p className="text-lg md:text-xl font-medium text-gray-00 tracking-wider">
            HELLO, I'M
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Hari Bhusal
            <span className="block mt-2 h-1 w-16  mx-auto md:mx-0" />
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-600">
            Product Engineer at {" "}
            <span className="text-blue-600">Delta Electronics</span>
          </p>
          
          {/* Button and Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            <Button />
            <div className="flex space-x-4">
              <a href="https://x.com/HariBhusal967" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/haribhusal320/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile