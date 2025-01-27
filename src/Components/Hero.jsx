import { motion } from "framer-motion";
import React from "react";
import chiamake from '../assets/chiamaka.png';
function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-cover bg-[url('https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Round-Up-Featured-Image.jpg')]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-white max-w-lg text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Hello! I'm Chiamaka
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Social Media Manager | Content Creator
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
            <a 
              href="#about" 
              className="bg-pink-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-pink-700"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="mt-10 md:mt-0 md:ml-10"
        >
          <img 
            src={chiamake}
            alt="Chiamaka Illustration" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
