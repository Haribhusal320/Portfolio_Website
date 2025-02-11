import Harinorway from '../Images/HariNorway.jpg'
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id='about' className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center" 
            data-aos="fade-up">
          <FaUser className="mr-3 text-blue-600" />
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
          {/* Image Section */}
          <div className="relative group flex-shrink-0" 
               data-aos="fade-right"
               data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-2 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src={Harinorway} 
              alt="Hari Bhusal"
              className="rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
            <div className="space-y-4 md:space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm Hari Bhusal,  Product Engineer from Nepal currently based in Norway, working at Delta Electronics. 
                My role involves managing product lifecycle tasks including BOM management, addressing component shortages, 
                and utilizing tools like Windchill and SAP for product life management.
              </p>
              
              <p className="text-lg">
                With a solid foundation in Electrical and Electronics Engineering from my bachelor's degree 
                and a master’s in Electronic Systems Design from NTNU, I combine technical expertise with 
                hands-on experience. My programming skills in Python help streamline and optimize engineering processes.
              </p>

              <div className="mt-8 space-y-3 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-600 flex-shrink-0" />
                  <a href="mailto:bhusalh99@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">bhusalh99@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Svangsgangen 4, 3044 drammen, Norway</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
// import Harinorway from '../Images/HariNorway.jpg'
// import { FaUser } from "react-icons/fa";

// function About() {
//   return (
//     <div id='about'>
      
//       <h1 className="flex items-center justify-center text-center mt-5 mb-5 font-medium font-bold text-4xl">
//         <FaUser className="mr-2" />
//         About Me
//       </h1>
  

//       <div  className="flex flex-col md:flex-row justify-center items-center md:mr-2 mb-2 md:mb-0">
//         <div className=' transition duration-300 ease-in-out hover:scale-110'>
//           <img src={Harinorway} className='rounded-lg size-52 h-auto  md:h-auto' alt="Norway Pic" />
//         </div>
        
//         <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"  
//           className='flex flex-col ml-12 mt-6 text-left'>
//           <p>I’m Hari Bhusal, a Product Engineer from Nepal currently based in Norway, working at Delta Electronics.</p>
//           <p>My role involves managing product lifecycle tasks such as BOM management, addressing,</p>
//           <p>component shortages and utilizing tools like Windchill and SAP for product life management.</p>
//           <p>With a solid foundation in Electrical and Electronics Engineering from my bachelor's</p>
//           <p>and a master’s degree in Electronic Systems Design from NTNU, I bring both technical expertise</p>
//           <p>and hands-on experience to my work. I also have skills in programming, especially Python,</p>
//           <p>which helps me streamline and optimize engineering processes.</p>

//           <p className='mt-4'><span className='md:text-xl text-blue-800'>Email:</span> <a href="mailto:bhusalh99@gmail.com">bhusalh99@gmail.com</a></p>
//           <p className='mt-4'><span className='md:text-xl text-blue-800'>Place:</span> Svangsgangen 4, 3044 drammen, Norway</p>
//         </div>



//       </div>
    
//     </div>
//   )
// }

// export default About
