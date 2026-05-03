import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
import 'aos/dist/aos.css';

function Footer() {
  return (
    <footer 
      className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 md:px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Hari's Portfolio
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Thank you for visiting my personal portfolio website.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h2>
            <nav className="flex flex-col space-y-3">
              <Link 
                smooth to='#about' 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                smooth to='#education' 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Education
              </Link>
              <Link 
                smooth to='#skills' 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </Link>
              <Link 
                smooth to='#experience' 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Experience
              </Link>
              <Link 
                smooth to='#contact' 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Contact Info
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaPhoneAlt className="flex-shrink-0" />
                <span>+47 967*****</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MdEmail className="flex-shrink-0" />
                <span>bhusalh99@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaLocationDot className="flex-shrink-0" />
                <span>Svangsgangen 4, 3044 Drammen, Norway</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Social Media
            </h2>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/haribhusal320/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </a>
              <a 
                href="https://github.com/Haribhusal320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </a>
              <a 
                href="mailto:bhusalh99@gmail.com"
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <MdEmail className="w-6 h-6 text-red-500 dark:text-red-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Hari Bhusal - All rights reserved
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Designed by <span className="text-blue-500 font-medium">Hari Bhusal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
