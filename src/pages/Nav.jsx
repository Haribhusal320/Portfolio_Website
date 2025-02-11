import { HashLink as Link } from "react-router-hash-link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link
          smooth
          to="#about"
          offset={-70}
          className="text-gray-300 hover:text-white text-lg font-medium transition duration-300 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>
        <Link
          smooth
          to="#education"
          className="text-gray-300 hover:text-white text-lg font-medium transition duration-300 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Education
        </Link>
        <Link
          smooth
          to="#skills"
          className="text-gray-300 hover:text-white text-lg font-medium transition duration-300 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Skills
        </Link>
        <Link
          smooth
          to="#experience"
          className="text-gray-300 hover:text-white text-lg font-medium transition duration-300 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Experience
        </Link>
        <Link
          smooth
          to="#contact"
          className="text-gray-300 hover:text-white text-lg font-medium transition duration-300 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleNavbar}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <IoMenu className="w-8 h-8" />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
            <button
              onClick={toggleNavbar}
              className="absolute top-6 right-6 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <IoClose className="w-8 h-8" />
            </button>
            <Link
              smooth
              to="#about"
              offset={-70}
              onClick={toggleNavbar}
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              smooth
              to="#education"
              onClick={toggleNavbar}
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              Education
            </Link>
            <Link
              smooth
              to="#skills"
              onClick={toggleNavbar}
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              smooth
              to="#experience"
              onClick={toggleNavbar}
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              smooth
              to="#contact"
              onClick={toggleNavbar}
              className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

// import { HashLink as Link } from "react-router-hash-link";
// import { IoMenu, IoClose } from "react-icons/io5";
// import { useState } from "react";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   //function to toggle the mobile menu
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="  text-2xl md:flex md:justify-between md:w-2/5 items-center ">
//       {/* Desktop view */}
//       <div className="hidden md:flex">
//         <Link smooth to='#about' offset={-70} className="link link-hover">About</Link>
//         <Link smooth to='#education' className="link link-hover ml-4">Education</Link>
//         <Link smooth to='#skills' className="link link-hover ml-4">Skills</Link>
//         <Link smooth to='#experience' className="link link-hover ml-4">Experience</Link>
//         <Link smooth to='#contact' className="link link-hover ml-4">Contact</Link>
//       </div>

//       {/* Mobile view */}
//       <div className="md:hidden">
//         {isOpen ? (
//           // Display close icon and navigation links when the menu is open
//           <div className="flex flex-col items-center">
//             <IoClose onClick={toggleNavbar} className="text-white" />
//             <Link smooth to='#about' offset={-70} className="link link-hover">About</Link>
//             <Link smooth to='#education' className="link link-hover mt-2">Education</Link>
//             <Link smooth to='#skills' className="link link-hover mt-2">Skills</Link>
//             <Link smooth to='#experience' className="link link-hover mt-2">Experience</Link>
//             <Link smooth to='#contact' className="link link-hover mt-2">Contact</Link>
//           </div>
//         ) : (
//           // Display menu icon when the menu is closed
//           <IoMenu onClick={toggleNavbar} className="text-white" />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Nav;
