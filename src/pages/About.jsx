import Harinorway from '../Images/HariNorway.jpg'
import { FaUser } from "react-icons/fa";

function About() {
  return (
    <div id='about'>
      
      <h1 className="flex items-center justify-center text-center mt-5 mb-5 font-medium font-bold text-4xl">
        <FaUser className="mr-2" />
        About Me
      </h1>
  

      <div  className="flex flex-col md:flex-row justify-center items-center md:mr-2 mb-2 md:mb-0">
        <div className=' transition duration-300 ease-in-out hover:scale-110'>
          <img src={Harinorway} className='rounded-lg size-52 h-auto  md:h-auto' alt="Norway Pic" />
        </div>
        
        <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom"  
          className='flex flex-col ml-12 mt-6 text-left'>
          <p>I’m Hari Bhusal, a Product Engineer from Nepal currently based in Norway, working at Delta Electronics.</p>
          <p>My role involves managing product lifecycle tasks such as BOM management, addressing,</p>
          <p>component shortages and utilizing tools like Windchill and SAP for product life management.</p>
          <p>With a solid foundation in Electrical and Electronics Engineering from my bachelor's</p>
          <p>and a master’s degree in Electronic Systems Design from NTNU, I bring both technical expertise</p>
          <p>and hands-on experience to my work. I also have skills in programming, especially Python,</p>
          <p>which helps me streamline and optimize engineering processes.</p>

          <p className='mt-4'><span className='text-blue-800'>Email:</span> <a href="mailto:bhusalh99@gmail.com">bhusalh99@gmail.com</a></p>
          <p className='mt-4'><span className='text-blue-800'>Place:</span> Svangsgangen 4, 3044 drammen, Norway</p>
        </div>



      </div>
    
    </div>
  )
}

export default About
