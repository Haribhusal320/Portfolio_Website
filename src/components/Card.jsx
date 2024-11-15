import React, { useEffect } from 'react';
import NTNU from '../Images/NTNU.jpg';
import PU from '../Images/PU.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <div className="max-w-4xl mx-auto">
      {/* NTNU */}
      <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"
         className="flex flex-col md:flex-row border border-blue-100 p-6 rounded-lg">
        <div className='transition duration-300 ease-in-out hover:scale-110'>
          <img src={NTNU} alt="pic of NTNU" className="h-32 w-52 rounded-lg " />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="font-bold text-xl">Master's in Electronic Systems Design</h4>
          <h4 className="text-xl mt-3">Norwegian University of Science and Technology</h4>
          <p className="text-blue-800 mt-3">2021-2023 | Graduated</p>
        </div>
      </div>

      {/* Pokhara University */}
      <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"
         className="flex flex-col  md:flex-row border border-blue-100 p-6 rounded-lg shadow-xl mt-2.5">
        <div className='transition duration-300 ease-in-out hover:scale-110'>
          <img src={PU} alt="Pic of PU" className="h-32 w-52 rounded-lg" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="font-bold text-xl">Bachelor's in Electrical and Electronics Engineering</h4>
          <h4 className="text-xl mt-3">Pokhara University</h4>
          <p className="text-blue-800 mt-3">2015-2019 | Graduated</p>
        </div>
      </div>

      {/* Anchor element */}
      <div id="anchor-element"></div>
    </div>
  );
}

export default Card;

