import React, { useEffect } from 'react';
import NTNU from '../Images/NTNU.jpg';
import PU from '../Images/PU.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap } from 'react-icons/fa';

function Card() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* NTNU Card */}
      <div data-aos='fade-right' data-aos-duration='800'
           className="group relative flex flex-col md:flex-row mb-6 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        
        <div className="relative md:w-1/3 mb-4 md:mb-0 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={NTNU} 
            alt="NTNU Campus" 
            className="w-full h-48 object-cover rounded-xl transform transition duration-500 group-hover:scale-105" 
          />
        </div>

        <div className="md:ml-8 md:w-2/3">
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-blue-600 mr-2 text-xl" />
            <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master's in Electronic Systems Design
            </h4>
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Norwegian University of Science and Technology
          </p>
          <div className="inline-flex items-center px-4 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-600">
            <span className="mr-2">🎓</span>
            2021-2023 | Graduated
          </div>
        </div>
      </div>

      {/* Pokhara University Card */}
      <div data-aos='fade-left' data-aos-duration='800' data-aos-delay="200"
           className="group relative flex flex-col md:flex-row mb-6 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        
        <div className="relative md:w-1/3 mb-4 md:mb-0 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={PU} 
            alt="PU Campus" 
            className="w-full h-48 object-cover rounded-xl transform transition duration-500 group-hover:scale-105" 
          />
        </div>

        <div className="md:ml-8 md:w-2/3">
          <div className="flex items-center mb-2">
            <FaGraduationCap className="text-purple-600 mr-2 text-xl" />
            <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bachelor's in Electrical and Electronics Engineering
            </h4>
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Pokhara University
          </p>
          <div className="inline-flex items-center px-4 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-600">
            <span className="mr-2">🎓</span>
            2015-2019 | Graduated
          </div>
        </div>
      </div>

      <div id="anchor-element"></div>
    </div>
  );
}

export default Card;