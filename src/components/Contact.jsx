import React, { useEffect, useState } from 'react';
import { IoMdContacts, IoIosContact, IoIosSend } from "react-icons/io";
import contactimage from '../Images/contactimage.png';
import { MdEmail, MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com'; // Import EmailJS

function Form() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own EmailJS details
    const serviceID = 'service_w8i5o6c';  // Copy this from EmailJS dashboard
    const templateID = 'template_b2na8un'; // Copy this from EmailJS template
    const userID = 'i6zt0dd8scG-ImPC5'; // Copy this from EmailJS public api keys

    // Send email using EmailJS
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
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div id='contact'>
      <div className=" ">
        <div className="flex items-center justify-center mt-8">
          <IoMdContacts size={50} />
          <h1 className='font-bold font-medium text-4xl'>Contact Me</h1>
        </div>

        <div data-aos='fade-down' data-aos-duration='800' data-aos-anchor-placement="center-bottom" className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex bg-white rounded-md justify-center items-center mt-5 ">
            <div className="mr-6">
              <img src={contactimage} alt="pic of contact me" />
            </div>
            {/* Form */}
            <div className="md:w-1/3 p-2">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="border border-black bg-slate-200 flex items-center rounded-md p-2">
                  <label htmlFor="name" className="mr-2">
                    <IoIosContact className="text-gray-500" />
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="p-1 bg-slate-200 focus:outline-none"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div >

                <div className="border border-black bg-slate-200 flex items-center rounded-md p-2 mt-3">
                  <label htmlFor="email" className="mr-2">
                    <MdEmail className="text-gray-500" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="rounded-md p-1 bg-slate-200 focus:outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="border border-black bg-slate-200 flex items-center rounded-md p-2 mt-3">
                  <label htmlFor="phone" className="mr-2">
                    <FaPhoneAlt className="text-gray-500" />
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="rounded-md p-1 bg-slate-200 focus:outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="border border-black bg-slate-200 flex items-center rounded-md p-3 mt-3">
                  <label htmlFor="message" className="mr-2">
                    <MdMessage className="text-gray-500 -mt-10" />
                  </label>

                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows="4"
                    className="resize p-1 bg-slate-200 focus:outline-none"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success text-white mt-3 transition duration-300 ease-in-out hover:scale-110">
                  Submit
                  <IoIosSend className="text-white" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
