import React, { useEffect } from 'react';
import skills from '../Images/Skills.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss } from "react-icons/si";
import pythonLogo from '../Images/python.svg';
import github from '../Images/github.svg';
import git from '../Images/git.svg';
import windchill from '../Images/Windchill.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const cardStyle = {
    width: '200px',
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="skills">
      <div className='flex items-center justify-center mt-8'>
        <img src={skills} alt="pic of skills" />
        <h1 className=' font-bold font-medium text-4xl'>Skills</h1>
      </div>

    <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom">
      {/* Top Row */}
      <div className='flex flex-wrap mt-5 justify-center '>
          
        {/* Windchill Card */}
        <div style={cardStyle} className='flex flex-col items-center justify-between border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4 transition duration-300 ease-in-out hover:scale-110'>

            {/* Centered Logo */}
            <div className='flex-grow flex items-center justify-center'>
                <img src={windchill} alt="Windchill Logo" width={150} height={150} />
            </div>

            {/* Name at Bottom */}
            <h1 className='font-medium text-xl mt-4'>Windchill</h1>
        </div>

        {/* PythonCard */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4
          transition duration-300 ease-in-out hover:scale-110'>
          <img src={pythonLogo} alt="Python Logo" width={60} height={60} />
          <h1 className='font-medium text-xl'>Python</h1>
        </div>

       

        {/* JavaScript Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4
          transition duration-300 ease-in-out hover:scale-110'>
          <FontAwesomeIcon icon={faJs} style={{color: "#f0db4f",}} size="4x" />
          <h1 className='font-medium text-xl'>JavaScript</h1>
        </div>

        {/* ReactJS Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4
        transition duration-300 ease-in-out hover:scale-110'>
          <FontAwesomeIcon icon={faReact} style={{color: "#61dafb",}} size="4x"/>
          <h1 className='font-medium text-xl'>ReactJS</h1>
        </div>
      </div>

      {/* Bottom Row */}
      <div className='flex flex-wrap mt-4 justify-center'>
        {/* Tailwind css Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4
          transition duration-300 ease-in-out hover:scale-110'>
          <SiTailwindcss  size={60} color='#06b6d4'/>
          <h1 className='font-medium text-xl'>Tailwind CSS</h1>
        </div>

        {/* CSS3 Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4
          transition duration-300 ease-in-out hover:scale-110'>
          <FontAwesomeIcon icon={faCss3Alt} style={{color: "#264de4",}} size="4x" />
          <h1 className='font-medium text-xl'>CSS3</h1>
        </div>

        {/* Git Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4 
        transition duration-300 ease-in-out hover:scale-110'>
          <img src={git} alt="git Logo" width={60} height={60} />
          <h1 className='font-medium text-xl'>Git</h1>
        </div>

        {/* Github Card */}
        <div style={cardStyle} className='flex flex-col items-center border border-blue-500 p-6 rounded-lg shadow-xl mr-4 mb-4
          transition duration-300 ease-in-out hover:scale-110'>
          <img src={github} alt="github Logo" width={60} height={60} />
          <h1 className='font-medium text-xl'>GitHub</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

