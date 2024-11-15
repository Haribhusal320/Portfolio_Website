import React, { useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="experience">
      <div>
        <h1 className="flex items-center justify-center text-center mt-10 mb-5 font-medium font-bold text-4xl">
          <FaBriefcase />
          Experience
        </h1>
      </div>

      <div className='flex flex-col justify-center sm:py-12'>
        <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
          <div className='relative text-gray-700 antialiased text-sm font-semibold'>

            {/* Vertical line through the middle */}
            <div className='hidden absolute w-1 sm:block bg-orange-400 h-full left-1/2 transform -translate-x-1/2'></div>

            {/* Left card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-start w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div data-aos='fade-right' data-aos-duration='1200' className='bg-white border p-4 rounded-lg shadow-xl group hover:bg-orange-500 cursor-pointer ease-in duration-150 transition-all'>
                      <h3 className='text-orange-400 font-semibold mb-3 group-hover:text-white text-2xl'>Delta Electronics, Norway</h3>
                      <p className='text-[15px] text-gray-600 group-hover:text-white leading-7'>
                        Product Engineer<br />June 2024 - Ongoing
                      </p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className='mt-6 sm:mt-0 sm:mb-12'>
              <div className='flex items-center flex-col sm:flex-row'>
                <div className='flex justify-end w-full mx-auto items-center'>
                  <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white border p-6 rounded-lg shadow-xl group hover:bg-orange-500 cursor-pointer ease-in duration-150 transition-all'>
                      <h3 className='text-orange-400 font-semibold mb-3 group-hover:text-white text-2xl'>Unique Energy Private Limited, Nepal</h3>
                      <p className='text-[15px] text-gray-600 group-hover:text-white leading-7'>
                        Electronics Engineer<br />Nov 2019 - Nov 2020
                      </p>
                    </div>
                  </div>
                </div>
                <div className='rounded-full bg-orange-400 border-white border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <FaBriefcase />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

