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
      <div className='flex items-center justify-center mt-8 gap-3'>
        <img src={skills}  alt="pic of skills" />
        <h1 className=' font-bold font-medium text-4xl'>Skills</h1>
      </div>

    <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom">
      {/* Top Row */}
      <div className='flex flex-wrap mt-5 justify-center '>
          
        {/* Windchill Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center justify-between p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
            
            <div className='flex-grow flex items-center justify-center z-10'>
                <img src={windchill} alt="Windchill Logo" width={150} height={150} className="drop-shadow-lg" />
            </div>

            <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent z-10'>
              Windchill
            </h1>
        </div>

        {/* PythonCard */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <img src={pythonLogo} alt="Python Logo" width={60} height={60} className="z-10 drop-shadow-lg" />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent z-10'>
            Python
          </h1>
        </div>

        {/* JavaScript Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <FontAwesomeIcon 
            icon={faJs} 
            className="z-10 drop-shadow-lg" 
            style={{color: "#f0db4f",}} 
            size="4x" 
          />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent z-10'>
            JavaScript
          </h1>
        </div>

        {/* ReactJS Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <FontAwesomeIcon 
            icon={faReact} 
            className="z-10 drop-shadow-lg"
            style={{color: "#61dafb",}} 
            size="4x"
          />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent z-10'>
            ReactJS
          </h1>
        </div>
      </div>

      {/* Bottom Row */}
      <div className='flex flex-wrap mt-4 justify-center'>
        {/* Tailwind css Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <SiTailwindcss  
            className="z-10 drop-shadow-lg"
            size={60} 
            color='#06b6d4'
          />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent z-10'>
            Tailwind CSS
          </h1>
        </div>

        {/* CSS3 Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <FontAwesomeIcon 
            icon={faCss3Alt} 
            className="z-10 drop-shadow-lg"
            style={{color: "#264de4",}} 
            size="4x" 
          />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent z-10'>
            CSS3
          </h1>
        </div>

        {/* Git Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <img 
            src={git} 
            alt="git Logo" 
            width={60} 
            height={60} 
            className="z-10 drop-shadow-lg" 
          />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent z-10'>
            Git
          </h1>
        </div>

        {/* Github Card */}
        <div style={cardStyle} className="group relative flex flex-col items-center p-6 rounded-xl shadow-2xl mr-4 mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/30">
          <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl' />
          <img 
            src={github} 
            alt="github Logo" 
            width={60} 
            height={60} 
            className="z-10 drop-shadow-lg" 
          />
          <h1 className='font-medium text-xl mt-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent z-10'>
            GitHub
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;


