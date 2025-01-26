import React from 'react';
import { motion } from 'framer-motion';

import backgroundImage from '../../assets/hero2.jpg';
import { PhoneArrowDownLeftIcon } from '@heroicons/react/20/solid';
import { MdMail } from 'react-icons/md';
import { FaAddressBook } from 'react-icons/fa6';
import { Fade } from 'react-reveal';

const Contact = () => {
  return (
  <Fade>
      <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl mb-12">
            We're here to help you with any inquiries or support you need.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Contact Information */}
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <PhoneArrowDownLeftIcon className="h-6 w-6 text-[#10B981] mr-4" />
              <div className='text-white'>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-lg">+234 800 123 4567</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <MdMail className="h-6 w-6 text-[#10B981] mr-4" />
              <div className='text-white'>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-lg">support@lagoscertificate.gov.ng</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <FaAddressBook className="h-6 w-6 text-[#10B981] mr-4" />
              <div className='text-white'>
                <h3 className="text-xl font-semibold">Adddress</h3>
                <p className="text-lg">12 lagos address</p>
              </div>
            </div>
           
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              action="#"
              method="POST"
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] placeholder-white placeholder-opacity-50"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] placeholder-white placeholder-opacity-50"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] placeholder-white placeholder-opacity-50"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] placeholder-white placeholder-opacity-50"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  </Fade>
  );
};

export default Contact;
