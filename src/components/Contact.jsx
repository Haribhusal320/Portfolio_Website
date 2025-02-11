import React, { useEffect, useState } from 'react';
import { IoMdContacts, IoIosContact, IoIosSend } from "react-icons/io";
import contactimage from '../Images/contactimage.png';
import { MdEmail, MdMessage } from "react-icons/md";
import { FaPhoneAlt, FaCheck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

function Form() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 // EmailJS integration code
const serviceID = 'service_w8i5o6c';
const templateID = 'template_b2na8un';
const userID = 'i6zt0dd8scG-ImPC5';

emailjs.sendForm(serviceID, templateID, e.target, userID)
  .then((result) => {
    console.log('Email sent successfully:', result.text);
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  }, (error) => {
    console.error('Error sending email:', error.text);
    alert('Failed to send message. Please try again.');
  });
};

  return (
    <section id='contact' className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-3">
            <IoMdContacts className="text-blue-500 animate-pulse" />
            Contact Me
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Get in touch with me via the form below
          </p>
        </div>

        <div data-aos='fade-up' data-aos-delay="200" className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 hidden lg:block">
              <img 
                src={contactimage} 
                alt="Contact illustration" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="lg:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full pl-4 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:outline-none bg-transparent transition-all peer"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-4 top-3 px-1 transition-all transform origin-left 
                    peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500
                    peer-valid:-translate-y-6 peer-valid:scale-75
                    text-gray-400 dark:text-gray-300 bg-white dark:bg-gray-800 pointer-events-none"
                  >
                    Your Name
                  </label>
                  <IoIosContact className="absolute right-4 top-3.5 text-gray-400 dark:text-gray-300 transition-all group-focus-within:text-blue-500" />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-4 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:outline-none bg-transparent transition-all peer"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-4 top-3 px-1 transition-all transform origin-left 
                    peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500
                    peer-valid:-translate-y-6 peer-valid:scale-75
                    text-gray-400 dark:text-gray-300 bg-white dark:bg-gray-800 pointer-events-none"
                  >
                    Email Address
                  </label>
                  <MdEmail className="absolute right-4 top-3.5 text-gray-400 dark:text-gray-300 transition-all group-focus-within:text-blue-500" />
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full pl-4 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:outline-none bg-transparent transition-all peer"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" " // Add empty placeholder
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-4 top-3 px-1 transition-all transform origin-left 
                    peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500
                    peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                    text-gray-400 dark:text-gray-300 bg-white dark:bg-gray-800 pointer-events-none"
                  >
                    Phone Number
                  </label>
                  <FaPhoneAlt className="absolute right-4 top-3.5 text-gray-400 dark:text-gray-300 transition-all group-focus-within:text-blue-500" />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full pl-4 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:outline-none bg-transparent resize-none transition-all peer"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 top-3 px-1 transition-all transform origin-left 
                    peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500
                    peer-valid:-translate-y-6 peer-valid:scale-75
                    text-gray-400 dark:text-gray-300 bg-white dark:bg-gray-800 pointer-events-none"
                  >
                    Your Message
                  </label>
                  <MdMessage className="absolute right-4 top-3.5 text-gray-400 dark:text-gray-300 transition-all group-focus-within:text-blue-500" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform overflow-hidden
                    ${isSubmitted ? 
                      'bg-green-500 hover:bg-green-600 scale-95' : 
                      'bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] shadow-lg hover:shadow-xl'}`}
                  disabled={isSubmitted}
                >
                  <span className="relative flex items-center gap-2">
                    {isSubmitted ? (
                      <>
                        <span className="animate-checkIn">
                          <FaCheck className="w-5 h-5" />
                        </span>
                        Sent!
                      </>
                    ) : (
                      <>
                        <IoIosSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes checkIn {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
        }
        .animate-checkIn {
          animation: checkIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </section>
  );
}

export default Form;

