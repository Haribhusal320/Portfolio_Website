import React, { useEffect } from 'react';
import { FaBriefcase } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className="relative py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3">
            <FaBriefcase className="text-orange-500" />
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">My career journey so far</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 w-1 bg-gradient-to-b from-orange-400 to-orange-200 h-full transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-16">

            {/* Left Card - Delta Electronics */}
            <div className="relative group" data-aos="fade-right">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                {/* Content */}
                <div className="w-full sm:w-1/2 sm:pr-8 mb-8 sm:mb-0">
                  <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                    <div className="absolute -right-2 sm:-left-2 top-6 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Delta Electronics, Norway
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Product Engineer
                    </p>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-500 bg-orange-100 dark:bg-gray-700 rounded-full">
                      June 2024 - Ongoing
                    </span>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden sm:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 items-center justify-center bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                  <FaBriefcase className="text-white text-lg" />
                </div>
              </div>
            </div>

            {/* Right Card - Unique Energy */}
            <div className="relative group" data-aos="fade-left" data-aos-delay="100">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                {/* Spacer for mobile */}
                <div className="w-full sm:w-1/2"></div>

                {/* Content */}
                <div className="w-full sm:w-1/2 sm:pl-8 mt-8 sm:mt-0">
                  <div className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Unique Energy Pvt. Ltd., Nepal
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Electronics Engineer
                    </p>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-500 bg-orange-100 dark:bg-gray-700 rounded-full">
                      Nov 2019 - Nov 2020
                    </span>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden sm:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 items-center justify-center bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                  <FaBriefcase className="text-white text-lg" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

